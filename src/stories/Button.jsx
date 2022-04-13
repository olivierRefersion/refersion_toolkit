import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ classes, label, size, ...props }) => {
  return (
    <button
      type="button"
      className={[classes, size].join(' ').trim()}
      {...props}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  classes: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  classes: null,
  size: null,
  onClick: undefined,
};
