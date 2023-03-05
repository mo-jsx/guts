import React from 'react';
import Link from './Link';
import Center from "../../Utils/Center";

export default {
    title: "Navigation/Simple Link",
    component: Link,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <Link {...args} />

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
