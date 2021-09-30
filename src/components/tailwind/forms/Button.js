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
  // variants
  //
  // sizes
  // lg (landing page hero)
  //   px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10
  //
  // md
  //   px-5 py-3
  //
  // colors
  // primary
  //   rounded-md shadow
  //   text-white bg-indigo-600 hover:bg-indigo-700
  //
  // secondary
  //   rounded-md shadow
  //   text-indigo-600 bg-white hover:bg-gray-50
  //
  // inset
  //
  //   text-indigo-700 bg-indigo-100 hover:bg-indigo-200

  const baseClassName = 'flex items-center justify-center border border-transparent text-base font-medium rounded-md';
  const buttonBaseClassName = 'shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

  if (link) {
    return (
      <div className={classnames({
        'rounded-md shadow': color === 'primary' || color === 'secondary',
      })}>
        <Link
          className={
            classnames(baseClassName, {
              'text-white bg-indigo-600 hover:bg-indigo-700': color === 'primary',
              'text-indigo-600 bg-white hover:bg-gray-50': color === 'secondary',
              'text-indigo-700 bg-indigo-100 hover:bg-indigo-200': color === 'inset',
              'px-5 py-3': size === 'medium',
              'px-8 py-3 md:py-4 md:text-lg md:px-10': size === 'large',
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
        'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500': color === 'primary',
        'text-indigo-600 bg-white hover:bg-gray-50': color === 'secondary',
        'text-indigo-700 bg-indigo-100 hover:bg-indigo-200': color === 'inset',
        'px-5 py-3': size === 'medium',
        'px-8 py-3 md:py-4 md:text-lg md:px-10': size === 'large',
        'w-full': fullWidth === true,
      }, className.root)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
