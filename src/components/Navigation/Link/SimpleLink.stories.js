import React from 'react';
import SimpleLink from './SimpleLink';
import Center from "../../Utils/Center";

export default {
    title: "Navigation/Simple Link",
    component: SimpleLink,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <SimpleLink {...args} />

export const Default = Template.bind({});
Default.args = {
    href: "#",
    content: "Primary Link"
}

export const Secondary = Template.bind({});
Secondary.args = {
    href: "#",
    variant: "link__secondary",
    content: "Secondary Link"
}
