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
  icon,
  prefixIcon,
  postfixIcon,
  ...props
}) => {
  const baseClassName =
    'flex items-center justify-center border border-transparent text-base font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-900';
  const buttonBaseClassName = 'shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const primaryBaseClass = 'text-white font-bold tracking-wide bg-primary-700 hover:bg-primary-600';
  const secondaryBaseClass = 'text-blueroadie bg-white hover:bg-gray-50';
  const insetBaseClass = 'text-primary-700 bg-primary-100 hover:bg-primary-200';

  const smallBaseClass = 'px-3 py-1';
  const mediumBaseClass = 'px-5 py-3 text-lg';
  const largeBaseClass = 'px-8 py-3 md:py-4 md:text-lg md:px-10';

  // Maintain backwards compatability.
  if (icon) {
    prefixIcon = <span>{icon}</span>;
  }

  if (prefixIcon) prefixIcon = <span className="h-6 w-6 mr-1">{prefixIcon}</span>;
  if (postfixIcon) postfixIcon = <span className="h-6 w-6 ml-1">{postfixIcon}</span>;

  if (link) {
    return (
      <div
        className={classnames({
          'rounded-md shadow': color === 'primary' || color === 'secondary',
          'inline-block': fullWidth === false,
        })}
      >
        <Link
          className={classnames(
            className,
            baseClassName,
            {
              [primaryBaseClass]: color === 'primary',
              [secondaryBaseClass]: color === 'secondary',
              [insetBaseClass]: color === 'inset',
              [smallBaseClass]: size === 'small',
              [mediumBaseClass]: size === 'medium',
              [largeBaseClass]: size === 'large',
              'w-full': fullWidth === true,
            },
            className.root
          )}
          {...props}
        >
          {prefixIcon}
          <span>{text}</span>
          {postfixIcon}
        </Link>
      </div>
    );
  }

  return (
    <button
      className={classnames(
        className,
        baseClassName,
        buttonBaseClassName,
        {
          [`${primaryBaseClass} focus:ring-primary-500`]: color === 'primary',
          [secondaryBaseClass]: color === 'secondary',
          [insetBaseClass]: color === 'inset',
          [smallBaseClass]: size === 'small',
          [mediumBaseClass]: size === 'medium',
          [largeBaseClass]: size === 'large',
          'w-full': fullWidth === true,
        },
        className.root
      )}
      {...props}
    >
      {prefixIcon}
      <span>{text}</span>
      {postfixIcon}
    </button>
  );
};

export default Button;
