import React, { useState, useContext } from 'react';

import { GithubContext, AlertContext } from '../../stores';

export const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim().length < 3) {
      alertContext.setAlert('Please enter at least three characters', 'light');
    } else {
      githubContext.searchUsersAndRepos(query);
    }
  };

  const onChange = e => setQuery(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='query'
          placeholder='Search Users and Repositiories...'
          value={query}
          onChange={onChange}
        />
        <input type='submit' value='Search' />
      </form>
    </div>
  );
};
