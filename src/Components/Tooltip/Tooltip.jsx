import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

/**
 * CSS-only tooltips
 */
export const Tooltip = ({ direction, text, children, ...props }) => {
    const attributeName = ['data-tooltip-', direction].join('');
    props[attributeName] = text;

    return (
        <span {...props}>
            {children}
        </span>
    )
}

Tooltip.propTypes = {
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
    direction: 'top',
    text: 'I have a top tooltip',
    children: 'text'
};