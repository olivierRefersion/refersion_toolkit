import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { Icon } from '../Icon/Icon';

export const Modal = ({ close, children, title, ...props }) => {
    return (
        <div className={['modal', props.className].join(' ').trim()}>
            <section className="modal-main">
                <div className='modal-header'>
                    <h4>{title}</h4>
                    <Icon icon="close" onClick={close} />
                </div>
                <div className='modal-content'>
                    {children}
                </div>
            </section>
        </div>
    );
};

Modal.propTypes = {
    close: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string.isRequired
  };
  
Modal.defaultProps = {
    close: () => {},
    children: 'Some Modal Text goes here',
    title: 'Modal',
};