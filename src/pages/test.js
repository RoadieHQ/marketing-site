import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Test = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log('useEffect running');
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span id="test" className={classNames('server')}>Server</span>;
  }

  return (
    <div>
      <span id="test" className={classNames('client')}>Client</span>
    </div>
  );
}

export default Test;
