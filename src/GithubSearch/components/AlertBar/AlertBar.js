import React, { useContext } from 'react';
import { Alert } from 'reactstrap';

import { AlertContext } from '../../stores';

export const AlertBar = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return alert !== null && <Alert color='danger'>{alert}</Alert>;
};
