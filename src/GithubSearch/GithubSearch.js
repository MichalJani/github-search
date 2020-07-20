import React from 'react';

import { SearchBar } from './components/SearchBar';
import { ResultsContainer } from './components/ResultsContainer';
import { Alert } from './components/Alert';

import { GithubState, AlertState } from './stores';

import './GithubSearch.css';

export const GithubSearch = () => (
  <GithubState>
    <AlertState>
      <div className='github-search'>
        <Alert />
        <SearchBar />
        <ResultsContainer />
      </div>
    </AlertState>
  </GithubState>
);
