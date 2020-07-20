import React, { useState, useContext } from 'react';
import { Button, Form, Input, Col, Row } from 'reactstrap';

import { GithubContext, AlertContext } from '../../stores';

export const SearchBar = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim().length < 3) {
      alertContext.setAlert('Please enter at least three characters');
    } else {
      githubContext.searchUsersAndRepos(query);
    }
  };

  const onChange = e => setQuery(e.target.value);

  return (
    <Form onSubmit={onSubmit}>
      <Row form>
        <Col md={10}>
          <Input
            type='text'
            name='query'
            placeholder='Search Users and Repositiories...'
            value={query}
            onChange={onChange}
          />
        </Col>
        <Col md={2}>
          <Button type='submit'>Search</Button>
        </Col>
      </Row>
    </Form>
  );
};
