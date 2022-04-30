import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import './header.css';
import { Auth } from '../../.';

/**
 * Main application header that can have a state of logged in or not logged in
 */
export const Header = ({ title, icon, toggleModal }) => {
  const AuthContext = useContext(Auth);

  return (
    <header>
      <div className="container grid">
        <div>
          <h1>
            <Icon display='boxed'classes='dark' icon={icon}/><span>{title}</span>
          </h1>
        </div>
        <div>
          {AuthContext.authenticated ? 
          <Button label={AuthContext.user} withIcon={true} icon='person' classes='secondary-outlined with-icon' size='small'/> : 
          <Button label='Authenticate' withIcon={true} icon='lock' classes='primary with-icon' size='small' onClick={toggleModal}/> }
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired
};

Header.defaultProps = {
  title: '',
  icon: '',
  loggedIn: false
};