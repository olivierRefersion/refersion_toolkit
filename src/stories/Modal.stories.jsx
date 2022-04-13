import React from 'react';
import { Modal } from './Modal';

export default {
  title: 'Components/Modals',
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center', minHeight: '20vh'}}>
        {Story()}
      </div>
    ),
  ],
};

const defaultArgs = {
    close: () => {},
    children: 'Some Modal Text goes here',
    title: 'Modal'
};

const Template = (args) => <Modal {...args} />;

export const ModalDefault= Template.bind({});
ModalDefault.args = {
    ...defaultArgs
};
