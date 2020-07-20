import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { SearchBar } from './components/SearchBar';
import { ResultsContainer } from './components/ResultsContainer';
import { AlertBar } from './components/AlertBar';

import { GithubState, AlertState } from './stores';

import './GithubSearch.css';

export const GithubSearch = () => (
  <AlertState>
    <GithubState>
      <Container className='github-search'>
        <AlertBar />
        <Row className='github-search__search-bar'>
          <Col>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <ResultsContainer />
          </Col>
        </Row>
      </Container>
    </GithubState>
  </AlertState>
);
