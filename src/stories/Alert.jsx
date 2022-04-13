import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
import { Icon } from './Icon';

/**
 * Primary UI component for putting out important messages
 */
export const Alert = ({ type, children, icon, ...props }) => {
  const iconMap = {
    default: '',
    info: 'info',
    success: 'check_circle',
    error: 'error_outline'
  };
  return (
    <blockquote
      className={type}
      {...props}
    >
      {type && <Icon icon={iconMap[type]} />}
      {children}
    </blockquote>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  type: 'default',
  children: null,
};