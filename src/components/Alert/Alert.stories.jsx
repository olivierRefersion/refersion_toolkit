import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'components/Alerts',
  component: Alert,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center', minHeight: '20vh'}}>
        {Story()}
      </div>
    ),
  ],
};

const defaultArgs = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

const Template = (args) => <Alert {...args} />;

export const AlertDefault = Template.bind({});
AlertDefault.args = {
  ...defaultArgs,
  type: 'default',
};

export const AlertInfo = Template.bind({});
AlertInfo.args = {
  ...defaultArgs,
  type: 'info'
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
  ...defaultArgs,
  type: 'success'
};

export const AlertError = Template.bind({});
AlertError.args = {
  ...defaultArgs,
  type: 'error'
};