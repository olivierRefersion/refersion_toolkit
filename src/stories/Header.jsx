import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Icon } from './icon';
import './header.css';

/**
 * Main application header that can have a state of logged in or not logged in
 */
export const Header = ({ title, icon, loggedIn }) => {
  return (
    <header>
      <div className="wrapper">
        <div>
          <h1>
            <Icon display='boxed'classes='dark' icon={icon}/><span>{title}</span>
          </h1>
        </div>
        <div>
          {loggedIn ? <Link to="/">User's image</Link>: <Link to="/home">Login</Link>}
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