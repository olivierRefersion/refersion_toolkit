import { Form } from './Form';
import { Button } from '../Button/Button';

export default {
    title: 'components/Form',
    component: Form,
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

const Template = (args) => <Form {...args} />;

export const FormDefault = Template.bind({});
FormDefault.args = {
    children:
        <><div className="formItem">
            <label>Test: <input></input></label>
        </div>
            <div className="formItem">
                <label>Test2: <input></input></label>
            </div>
            <Button label='Submit' classes='primary' size='small'/>
        </>
}