import Select from './Select';
import Center from '../../Utils/Center';

export default {
    title: "CTA/Select",
    component: Select,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <Select {...args} />

export const SelectMenu = Template.bind({});
SelectMenu.args = {
    options: [
        {
            value: 0,
            content: "Choose your option"
        },
        {
            value: 1,
            content: "Haha"
        },
        {
            value: 2,
            content: "Foo"
        },
        {
            value: 3,
            content: "Bar"
        },
        {
            value: 4,
            content: "Baz"
        }
    ],
    label: "Select Menu",
}