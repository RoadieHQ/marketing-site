// import classnames from 'classnames';
import React, { useState, useEffect } from 'react';

// console.log('CLASSNAMES', classnames);
console.log('USEEFFECT', useEffect);

const Test = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log('useEffect running');
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <span id="test">Server</span>;
  }

  return (
    <div>
      <span id="test">Client</span>
    </div>
  );
}

export default Test;
