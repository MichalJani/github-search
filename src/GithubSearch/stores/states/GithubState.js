import React, { useReducer, useContext } from 'react';

import { apiCaller, dataFormatter, sortAscByName } from '../../helpers';
import { GithubContext, AlertContext } from '../contexts';
import { githubReducer } from '../reducers';
import { SEARCH_USERS_AND_REPOS, SET_LOADING, STOP_LOADING } from '../types';

export const GithubState = props => {
  const initialState = {
    usersAndRepos: null,
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  const alertContext = useContext(AlertContext);

  const searchUsersAndRepos = async query => {
    setLoading();
    try {
      const userData = await apiCaller(
        `search/users?q=${query}+in:username&per_page=25`
      );
      const repoData = await apiCaller(
        `search/repositories?q=${query}_in:name&per_page=25`
      );
      const data = sortAscByName(dataFormatter(userData.items, repoData.items));

      dispatch({
        type: SEARCH_USERS_AND_REPOS,
        payload: data
      });
    } catch (err) {
      stopLoading();
      alertContext.setAlert('Failed to fetch the data from Github');
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const stopLoading = () => dispatch({ type: STOP_LOADING });

  return (
    <GithubContext.Provider
      value={{
        usersAndRepos: state.usersAndRepos,
        loading: state.loading,
        searchUsersAndRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
