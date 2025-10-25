import React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const SchemaTable = ({ schema, title }) => {
  if (!schema?.internal?.content) {
    return (
      <div className="text-gray-500 italic">
        No {title.toLowerCase()} defined for this action.
      </div>
    );
  }

  let schemaObj;
  try {
    schemaObj = JSON.parse(schema.internal.content);
  } catch (e) {
    console.error(`Error parsing ${title}:`, e);
    return (
      <div className="text-red-500">
        Error parsing {title.toLowerCase()} schema.
      </div>
    );
  }

  const properties = schemaObj.properties || {};
  const required = schemaObj.required || [];
  const propertyEntries = Object.entries(properties);

  if (propertyEntries.length === 0) {
    return (
      <div className="text-gray-500 italic">
        No {title.toLowerCase()} defined for this action.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Property
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Required
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {propertyEntries.map(([propertyName, propertySchema]) => {
            const isRequired = required.includes(propertyName);
            return (
              <tr key={propertyName}>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  {propertyName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {propertySchema.type || 'any'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {propertySchema.description || '-'}
                </td>
                <td className="px-4 py-3 text-sm text-center">
                  {isRequired ? (
                    <CheckIcon className="h-5 w-5 text-green-500 inline" title="Required" />
                  ) : (
                    <XIcon className="h-5 w-5 text-gray-300 inline" title="Optional" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SchemaTable;
