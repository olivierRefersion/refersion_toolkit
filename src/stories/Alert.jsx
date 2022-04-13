import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
import { Icon } from './Icon';

/**
 * Primary UI component for putting out important messages
 */
export const Alert = ({ type, text, icon, ...props }) => {
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
      {type && <Icon icon={iconMap[type]}/>}
      {text}
    </blockquote>
  )
}

Alert.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string.isRequired,
    withIcon: PropTypes.bool
  };
  
  Alert.defaultProps = {
    type: 'default',
    text: null,
  };