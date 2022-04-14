import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Buttons',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center', minHeight: '30vh'}}>
        {Story()}
      </div>
    ),
  ],
};

const defaultArgs = {
  label: 'button'
};

const Template = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  ...defaultArgs,
  classes: 'primary',
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  ...defaultArgs,
  classes: 'secondary',
}

export const ButtonPrimaryOutlined = Template.bind({});
ButtonPrimaryOutlined.args = {
  ...defaultArgs,
  classes: 'primary-outlined',
};

export const ButtonSecondaryOutlined = Template.bind({});
ButtonSecondaryOutlined.args = {
  ...defaultArgs,
  classes: 'secondary-outlined',
}

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  ...defaultArgs,
  classes: 'primary',
  size: 'small'
}

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  ...defaultArgs,
  classes: 'primary',
  size: 'large'
};

export const ErrorSolid = Template.bind({});
ErrorSolid.args = {
  ...defaultArgs,
  classes: 'primary error',
};

export const ErrorOutlined = Template.bind({});
ErrorOutlined.args = {
  ...defaultArgs,
  classes: 'outlined error',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultArgs,
  classes: 'primary with-icon',
  withIcon: true,
  icon: 'lock',
  label: 'Authorize'
};
