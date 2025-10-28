import React from 'react';
import { Link, Title } from 'components';
import { CheckCircleIcon } from '@heroicons/react/outline';
import { RoadieRacksIcon } from 'components/icons';

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
  const formattedInputCount = `${inputCount} input${inputCount !== 1 ? 's' : ''}`;
  const formattedOutputCount = `${outputCount} output${outputCount !== 1 ? 's' : ''}`;
  const text = [formattedInputCount, formattedOutputCount].join(', ');

  return <div>{text}</div>;
};

const FooterInner = ({ action }) => {
  const {
    availableOnRoadie,
    supportsDryRun,
    inputSchema,
    outputSchema,
  } = action;

  return (
    <div className="px-4 py-2 flex items-center">
      <div className="flex gap-4 text-xs text-gray-500">
        <div className="lg:hidden xl:block">
          <SchemaSummary inputSchema={inputSchema} outputSchema={outputSchema} />
        </div>

        {availableOnRoadie && (
          <div className="flex items-center gap-1">
            <RoadieRacksIcon className="h-[0.8rem] w-[0.8rem] inline" />
            <span>Available on Roadie</span>
          </div>
        )}
        {supportsDryRun && (
          <div className="flex items-center gap-1">
            <CheckCircleIcon className="inline-block w-4 text-green-600" />
            <span>Dry run</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ListItem = ({ action }) => {
  const {
    slug,
    actionId,
    humanName,
    description,
  } = action;

  return (
    <div className="border-2 hover:border-gray-500" data-testid={`action-${slug}`}>
      <Link
        to={`/backstage/scaffolder-actions${slug}`}
        className="underline-none"
      >
        <div className={`flex flex-col justify-between md:h-[170px] lg:h-[190px]`}>
          <div className="p-4">
            <div className="flex justify-between">
              <div className="max-w-2xl mr-4">
                <div className="mb-1">
                  <Title className="text-xl">{humanName || actionId}</Title>
                </div>

                {description?.childMarkdownRemark?.html && (
                  <div
                    className="text-sm mb-2 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }}
                  />
                )}
              </div>
            </div>
          </div>

          <FooterInner action={action} />
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
