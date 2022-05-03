import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';
import { Icon, Button, Dropmenu } from '../.';
import { Auth } from '../../.';

/**
 * Main application header that can have a state of logged in or not logged in
 */
export const Header = ({ title, icon, toggleModal, setModalVisibility }) => {
  const AuthContext = useContext(Auth);

  const [dropMenuActive, setDropMenuActive] = useState(false);
  const dropIsVisible = dropMenuActive ? 'visible' : '';
  const navigate = useNavigate();

  const showModal = () => {
    setModalVisibility(true)
  }

  const logout = () => {
    sessionStorage.removeItem("__auth")
    AuthContext.setAuthenticated(false)
    navigate('/?loggedout=true')
  }

  const showDrop = () => {
    setDropMenuActive(!dropMenuActive)
  }

  return (
    <header>
      <div className="container grid">
        <div>
          <h1>
            <Icon display='boxed' classes='dark' icon={icon} /><span>{title}</span>
          </h1>
        </div>
        <div>
          {AuthContext.authenticated ?
            <Dropmenu onClick={showDrop}>
              <Button label={AuthContext.user} withIcon={true} icon='person' classes='secondary-outlined with-icon' size='small' />
              <ul className={dropIsVisible}>
                <li onClick={showModal}>Change Client</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </Dropmenu> :
            <Button label='Authenticate' withIcon={true} icon='lock' classes='primary with-icon' size='small' onClick={toggleModal} />}
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