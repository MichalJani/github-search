import React, { useReducer } from 'react';
import { apiCaller, dataFormatter, sortAscByName } from '../../helpers';
import { GithubContext } from '../contexts';
import { githubReducer } from '../reducers';
import { SEARCH_USERS_AND_REPOS, SET_LOADING } from '../types';

export const GithubState = props => {
  const initialState = {
    usersAndRepos: null,
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsersAndRepos = async query => {
    setLoading();

    const userData = await apiCaller(
      `search/users?q=${query}+in:username&per_page=25`
    );
    const repoData = await apiCaller(
      `search/repositories?q=${query}_in:name&per_page=25`
    );
    const data = sortAscByName(dataFormatter({ userData, repoData }));

    dispatch({
      type: SEARCH_USERS_AND_REPOS,
      payload: data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

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
