import React, { useState } from 'react';
import classnames from 'classnames';
import snakeCase from 'lodash/snakeCase';
import format from 'date-fns/format';

const ReleasedAt = ({ releasedAt }) => (
  <time className="uppercase text-xs lg:text-sm leading-7 lg:pt-1 text-gray-500 font-bold md:w-32 lg:w-48 flex-shrink-0">
    {format(new Date(releasedAt), 'MMM d, yyyy')}
  </time>
);

const ChangeSet = ({
  releasedAt,
  description,
  title,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <>
      <hr className="w-full bg-gray-100 my-8" style={{ height: 1 }} />
      <li className="mt-6 list-reset lg:flex items-start">
        <div className="md:flex">
          <ReleasedAt releasedAt={releasedAt} />
          <div>
            <button onClick={toggleOpen} className="text-left">
              <h3
                className="tracking-tight text-gray-900 text-base sm:text-xl hover:underline"
                id={snakeCase(title)}
              >
                {title}
              </h3>
            </button>

            {description && (
              <div
                className={classnames('mt-6 prose max-w-none', {
                  'h-0 hidden': !isOpen,
                })}
                dangerouslySetInnerHTML={{ __html: description.html }}
              />
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default ChangeSet;
