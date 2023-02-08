import Dropdown from './Dropdown';
import Center from '../../Utils/Center';

export default {
    title: "CTA/Dropdown",
    component: Dropdown,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <Dropdown {...args} />

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
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
    label: "Dropdown Menu",
}