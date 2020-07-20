import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';

import { ResultsList } from '../ResultsList';
import { Spinner } from '../Spinner';

import { GithubContext } from '../../stores';

export const ResultsContainer = () => {
  const githubContext = useContext(GithubContext);

  const { loading, usersAndRepos } = githubContext;

  if (loading) {
    return <Spinner />;
  } else if (usersAndRepos === null) {
    return <>Type your query and click Search!</>;
  } else {
    return <ResultsList />;
  }
};
