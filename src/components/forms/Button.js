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
  const baseClassName = '';
  const buttonBaseClassName = '';
  const primaryBaseClass = '';
  const secondaryBaseClass = '';
  const insetBaseClass = '';

  const smallBaseClass = '';
  const mediumBaseClass = '';
  const largeBaseClass = '';

  // Maintain backwards compatability.
  if (icon) {
    prefixIcon = <span>{icon}</span>;
  }

  if (prefixIcon) prefixIcon = <span className="h-6 w-6 mr-1">{prefixIcon}</span>;
  if (postfixIcon) postfixIcon = <span className="h-6 w-6 ml-1">{postfixIcon}</span>;

  if (link) {
    return (
      <Link
        className={
          classnames(className, baseClassName, {
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
        {prefixIcon}
        <span>{text}</span>
        {postfixIcon}
      </Link>
    );
  }

  return (
    <button
      className={classnames(className, baseClassName, buttonBaseClassName, {
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
      {prefixIcon}
      <span>{text}</span>
      {postfixIcon}
    </button>
  );
};

export default Button;
