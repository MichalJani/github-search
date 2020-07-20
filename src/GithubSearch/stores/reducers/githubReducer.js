import { SEARCH_USERS_AND_REPOS, SET_LOADING } from '../types';

export const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS_AND_REPOS:
      return {
        ...state,
        usersAndRepos: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
