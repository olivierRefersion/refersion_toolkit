import React from 'react';
import { Icon } from './Icon';

export default {
    title: 'Components/Icons',
    component: Icon,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                {Story()}
            </div>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Icon {...args} />;

export const plain = Template.bind({});
plain.args = {
    theme: '-outlined',
    display: 'plain',
    icon: 'home',
};

export const boxed = Template.bind({});
boxed.args = {
    theme: '-outlined',
    display: 'boxed',
    icon: 'home',
};

export const boxedDark = Template.bind({});
boxedDark.args = {
    theme: '-outlined',
    display: 'boxed',
    icon: 'home',
    classes: 'dark'
};