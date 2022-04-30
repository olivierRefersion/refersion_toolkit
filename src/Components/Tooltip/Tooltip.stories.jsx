import React from 'react';
import { Tooltip } from './Tooltip';

export default {
    title: 'Components/Tooltips',
    component: Tooltip,
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

const Template = (args) => <Tooltip {...args} />;

export const top = Template.bind({});
top.args = {
    direction: 'top', 
    text: 'I am a tooltip',
};

export const bottom = Template.bind({});
bottom.args = {
    direction: 'bottom', 
    text: 'I am a tooltip',
};

export const left = Template.bind({});
left.args = {
    direction: 'left', 
    text: 'I am a tooltip',
};

export const right = Template.bind({});
right.args = {
    direction: 'right', 
    text: 'I am a tooltip',
};