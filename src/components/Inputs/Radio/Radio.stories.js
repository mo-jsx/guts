import React from 'react';
import Radio from './Radio';
import Center from "../../Utils/Center";

export default {
    title: "CTA/Radio Button",
    component: Radio,
    decoratos: [Story => <Center><Story /></Center>]
}

const Template = args => <Radio {...args} />

export const Default = Template.bind({});
Default.args = {
    label: "Radio Buttons",
    options: ["Haha", "Hoho"],
    orientation: "vertical"
}

export const HorizontalRadio = Template.bind({});
HorizontalRadio.args = {
    label: "Horizontal Radio Buttons",
    options: ["Haha", "Hoho"],
    orientation: "horizontal"
}