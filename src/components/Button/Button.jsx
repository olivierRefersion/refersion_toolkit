import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { Icon } from '../Icon/Icon';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ classes, label, size, withIcon, icon, wrap, ...props }) => {
  return (
    <button
      type="button"
      className={[classes, size].join(' ').trim()}
      {...props}
    >
      {withIcon && <Icon icon={icon}/>}
      {wrap ? <span>{label}</span> : label}
    </button>
  )
}

Button.propTypes = {
  classes: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  withIcon: PropTypes.bool
};

Button.defaultProps = {
  classes: null,
  size: null,
  onClick: undefined,
  withIcon: false
};
