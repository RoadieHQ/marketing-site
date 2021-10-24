import React from 'react';
import { Link } from 'components';
import classnames from 'classnames';

const Button = ({
  fullWidth = false,
  text = 'Submit',
  link = false,
  color = 'primary',
  className = {},
  size = 'medium',
  ...props
}) => {
  const baseClassName = 'flex items-center justify-center border border-transparent text-base font-medium rounded-md';
  const buttonBaseClassName = 'shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const primaryBaseClass = 'text-white bg-primary-600 hover:bg-primary-700';
  const secondaryBaseClass = 'text-primary-600 bg-white hover:bg-gray-50';
  const insetBaseClass = 'text-primary-700 bg-primary-100 hover:bg-primary-200';

  const smallBaseClass = 'px-3 py-1';
  const mediumBaseClass = 'px-5 py-3';
  const largeBaseClass = 'px-8 py-3 md:py-4 md:text-lg md:px-10';

  if (link) {
    return (
      <div className={classnames({
        'rounded-md shadow': color === 'primary' || color === 'secondary',
      })}>
        <Link
          className={
            classnames(baseClassName, {
              [primaryBaseClass]: color === 'primary',
              [secondaryBaseClass]: color === 'secondary',
              [insetBaseClass]: color === 'inset',
              [smallBaseClass]: size === 'small',
              [mediumBaseClass]: size === 'medium',
              [largeBaseClass]: size === 'large',
              'w-full': fullWidth === true,
            }, className.root)
          }
          {...props}
        >
          {text}
        </Link>
      </div>
    );
  }

  return (
    <button
      className={classnames(baseClassName, buttonBaseClassName, {
        [`${primaryBaseClass} focus:ring-primary-500`]: color === 'primary',
        [secondaryBaseClass]: color === 'secondary',
        [insetBaseClass]: color === 'inset',
        [smallBaseClass]: size === 'small',
        [mediumBaseClass]: size === 'medium',
        [largeBaseClass]: size === 'large',
        'w-full': fullWidth === true,
      }, className.root)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
