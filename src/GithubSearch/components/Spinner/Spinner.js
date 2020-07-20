import React from 'react';

import './Spinner.css';

export const Spinner = () => (
  <div className='spinner'>
    <div className='lds-circle'>
      <div></div>
    </div>
    <div>Data is loading...</div>
  </div>
);
