import React from 'react';
import { Dropzone } from './Dropzone';

export default {
    title: 'components/Dropzone',
    component: Dropzone,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px 100px' }}>
                {Story()}
            </div>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Dropzone {...args} />;

const formState = {};
const setFormState =() => {};

export const DropzoneDefault = Template.bind({});
DropzoneDefault.args = {
    setParentFormState: setFormState,
    parentFormState: formState
};