import React from 'react';

const CodeQualityCard = () => {
  return (
    <div className='Card shadow pt-5 pr-5 pb-5 pl-5'>
      <span className='Text size-3 weight-2 string mb-4'>Code Quality</span>
      <div className='Flex column ai-stretch gap-4'>
        <div className='Flex row jc-between'>
          <span className='Text size-3'>Bugs</span>
          <span className='Text size-3'>0</span>
        </div>
        <div className='Flex row jc-between'>
          <span className='Text size-3'>Vulnerabilities</span>
          <span className='Text size-3'>0</span>
        </div>
        <div className='Flex row jc-between'>
          <span className='Text size-3'>Code Smells</span>
          <span className='Text size-3'>1</span>
        </div>
        <div className='Flex row jc-between'>
          <span className='Text size-3'>Hotspots Reviewed</span>
          <span className='Text size-3'>0.0%</span>
        </div>
        <div className='Flex row jc-between'>
          <span className='Text size-3'>Coverage</span>
          <span className='Text size-3'>—</span>
        </div>
        <div className='Flex row jc-between'>
          <span className='Text size-3'>Duplications</span>
          <span className='Text size-3'>0.0%</span>
        </div>
        <div className='Flex row jc-between'>
          <span className='Text size-3 lowContrast'>Last Analyzed on 4 Aug 2023 at 10:42</span>
          <span className='Text size-3 indigo'>View More</span>
        </div>
      </div>
    </div>
  );
};

export default CodeQualityCard;
