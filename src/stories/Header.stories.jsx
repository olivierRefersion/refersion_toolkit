import React from 'react';
import { Header } from './Header';
import { MemoryRouter as Router } from 'react-router-dom';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Router><Header {...args} /></Router>;

export const NotLoggedIn = Template.bind({});
NotLoggedIn.args = {
  title: 'Not Logged In',
  icon: 'home',
  loggedIn: false
};

export const loggedIn = Template.bind({});
loggedIn.args = {
  title: 'Logged In',
  icon: 'home',
  loggedIn: true
};