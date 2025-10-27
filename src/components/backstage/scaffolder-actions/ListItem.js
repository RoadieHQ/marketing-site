import React from 'react';
import { Link, Title } from 'components';

const getPropertyCount = (schema) => {
  if (!schema?.internal?.content) return 0;

  try {
    const schemaObj = JSON.parse(schema.internal.content);
    const properties = schemaObj.properties || {};
    return Object.keys(properties).length;
  } catch (e) {
    console.error('Error parsing schema:', e);
    return 0;
  }
};

const SchemaSummary = ({ inputSchema, outputSchema }) => {
  const inputCount = getPropertyCount(inputSchema);
  const outputCount = getPropertyCount(outputSchema);
  const formattedInputCount = inputCount !== 0 &&`${inputCount} input${inputCount !== 1 ? 's' : ''}`;
  const formattedOutputCount = outputCount !== 0 && `${outputCount} output${outputCount !== 1 ? 's' : ''}`;
  const text = [formattedInputCount, formattedOutputCount].filter(Boolean).join(', ');

  return <div className="text-sm text-gray-600">{text}</div>;
};

const ListItem = ({
  slug,
  actionId,
  humanName,
  description,
  inputSchema,
  outputSchema,
}) => {
  return (
    <div className="border-2 hover:border-gray-500 p-4" data-testid={`action-${slug}`}>
      <Link
        to={`/backstage/scaffolder-actions${slug}`}
        className="underline-none"
      >
        <div className="flex justify-between">
          <div className="max-w-2xl mr-4">
            <div className="mb-1">
              <Title className="text-xl">{humanName || actionId}</Title>
              <div className="text-sm text-gray-600 mt-1">
                <code className="bg-gray-100 px-1.5 py-0.5 rounded">{actionId}</code>
              </div>
            </div>

            {description?.childMarkdownRemark?.html && (
              <div
                className="text-sm mb-2 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }}
              />
            )}

            <SchemaSummary inputSchema={inputSchema} outputSchema={outputSchema} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
