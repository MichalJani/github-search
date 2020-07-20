import React, { useContext } from 'react';

import { AlertContext } from '../../stores';

import './Alert.css';

export const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return alert === null ? (
    <div className='alert--placeholder'></div>
  ) : (
    <div className='alert'>{alert.msg}</div>
  );
};
