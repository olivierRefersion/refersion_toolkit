import PropTypes from 'prop-types';
import { Children } from 'react';
import './Form.css';

export const Form = ({ method, action, children, ...props }) => {
    return (
        <form method={method} action={action} {...props}>
            {children}
        </form>
    )
}

Form.propTypes = {
    method: PropTypes.string,
    action: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

Form.defaultProps = {
    method: 'POST',
    action: '',
    children: null
};