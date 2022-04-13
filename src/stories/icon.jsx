import React from 'react';
import PropTypes from 'prop-types';
import './icon.css';

/**
 * Icons for menu items, buttons and more (using Google Material Icons: https://fonts.google.com/icons?icon.style=Outlined)
 */
 export const Icon = ({ theme, display, icon, classes, ...props }) => {
    return (
        <span
        className={[`material-icons${theme}`, display, classes].join(' ').trim()}
        {...props}
      >
        {icon}
      </span>
    )
  }

Icon.propTypes = {
    theme: PropTypes.oneOf(['','-outlined', '-two-tone']), 
    display: PropTypes.oneOf(['plain', 'boxed']),
    icon: PropTypes.string.isRequired,
    classes: PropTypes.string,
  };
  
Icon.defaultProps = {
    theme: '-outlined', 
    display: 'plain',
    icon: 'home',
  };