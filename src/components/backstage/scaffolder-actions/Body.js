import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Title } from 'components';
import SchemaTable from './SchemaTable';

const Body = ({ action }) => {
  const { description, usageExamples, inputSchema, outputSchema } = action;
  const descriptionHtml = description?.childMarkdownRemark?.html;
  const usageExamplesHtml = usageExamples?.childMarkdownRemark?.html;

  return (
    <>
      {!isEmpty(descriptionHtml) && (
        <div className="mb-12" id="description">
          <div>
            <strong>Description</strong>
          </div>
          <div
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }}
          />
        </div>
      )}

      <div className="mb-12" id="input-schema">
        <div className="mb-4">
          <Title className="text-3xl">Input Schema</Title>
        </div>
        <SchemaTable schema={inputSchema} title="Input Schema" />
      </div>

      <div className="mb-12" id="output-schema">
        <div className="mb-4">
          <Title className="text-3xl">Output Schema</Title>
        </div>
        <SchemaTable schema={outputSchema} title="Output Schema" />
      </div>

      {!isEmpty(usageExamplesHtml) && (
        <div className="mb-12" id="usage-examples">
          <div className="mb-4">
            <Title className="text-3xl">Usage Examples</Title>
          </div>
          <div
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: usageExamples.childMarkdownRemark.html }}
          />
        </div>
      )}

    </>
  );
};

export default Body;
