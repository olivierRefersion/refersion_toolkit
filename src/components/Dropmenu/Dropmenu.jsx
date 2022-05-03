import React from 'react';
import PropTypes from 'prop-types';
import './Dropmenu.css';

/**
 * Primary UI component for user interaction
 */
export const Dropmenu = ({ children, ...props }) => {
  return (
    <span className='drop-menu' {...props} >
      {children}
    </span>
  )
}

Dropmenu.propTypes = {
    children: PropTypes.node.isRequired,
};

Dropmenu.defaultProps = {
    children: <ul><li>Item</li></ul>,
};
