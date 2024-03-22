import React from 'react';

const DocumentationCard = () => {
  return (
    <div className='Card shadow pt-5 pr-5 pb-5 pl-5'>
      <span className='Text size-3 weight-2 string mb-4'>Documentation</span>
      <div className='Flex column ai-stretch gap-4'>
        <div className='Flex row'>
          <div style={{ width: '50%' }}>
            <span className='Text size-3 lowContrast'>Document</span>
          </div>
          <div style={{ width: '25%' }}>
            <span className='Text size-3 lowContrast'>Owner</span>
          </div>
          <div className='Flex row jc-between ai-center' style={{ width: '25%' }}>
            <span className='Text size-3 lowContrast'>Type</span>
          </div>
        </div>
        <div className='Flex row'>
          <div style={{ width: '50%' }}>
            <span className='Text size-3 indigo'>artist-service</span>
          </div>
          <div style={{ width: '25%' }}>
            <span className='Text size-3'>Engineering</span>
          </div>
          <div className='Flex row jc-between ai-center' style={{ width: '25%' }}>
            <span className='Text size-3'>Service</span>
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="var(--gray-11)" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <div className='Flex row'>
          <div style={{ width: '50%' }}>
            <span className='Text size-3 indigo'>backstage</span>
          </div>
          <div style={{ width: '25%' }}>
            <span className='Text size-3'>Engineering</span>
          </div>
          <div className='Flex row jc-between ai-center' style={{ width: '25%' }}>
            <span className='Text size-3'>Service</span>
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="var(--gray-11)" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <div className='Flex row'>
          <div style={{ width: '50%' }}>
            <span className='Text size-3 indigo'>backstage-sample-service</span>
          </div>
          <div style={{ width: '25%' }}>
            <span className='Text size-3'>Engineering</span>
          </div>
          <div className='Flex row jc-between ai-center' style={{ width: '25%' }}>
            <span className='Text size-3'>Service</span>
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="var(--gray-11)" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <div className='Flex row'>
          <div style={{ width: '50%' }}>
            <span className='Text size-3 indigo'>cluster-dev0-gitops</span>
          </div>
          <div style={{ width: '25%' }}>
            <span className='Text size-3'>Engineering</span>
          </div>
          <div className='Flex row jc-between ai-center' style={{ width: '25%' }}>
            <span className='Text size-3'>Library</span>
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="var(--gray-11)" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <div className='Flex row'>
          <div style={{ width: '50%' }}>
            <span className='Text size-3 indigo'>Combined Monorepo</span>
          </div>
          <div style={{ width: '25%' }}>
            <span className='Text size-3'>Engineering</span>
          </div>
          <div className='Flex row jc-between ai-center' style={{ width: '25%' }}>
            <span className='Text size-3'>Library</span>
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="var(--gray-11)" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <div className='Flex row'>
          <div style={{ width: '50%' }}>
            <span className='Text size-3 indigo'>github-issue-tracker</span>
          </div>
          <div style={{ width: '25%' }}>
            <span className='Text size-3'>Ops</span>
          </div>
          <div className='Flex row jc-between ai-center' style={{ width: '25%' }}>
            <span className='Text size-3'>Service</span>
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="var(--gray-11)" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationCard;
