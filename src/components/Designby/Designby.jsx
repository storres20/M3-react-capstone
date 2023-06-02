import React from 'react';
import './Designby.scss';

function Designby() {
  return (
    <div className="designContainer" data-testid="designby">
      <p>
        Designed by
        {' '}
        <a href="https://lonkansoft.pro/" target="_blank" rel="noreferrer"><b>ITALO</b></a>
      </p>
    </div>
  );
}

export default Designby;
