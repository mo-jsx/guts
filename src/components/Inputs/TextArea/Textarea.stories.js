import React from 'react';
import Textarea from './Textarea';
import Center from "../../Utils/Center";

export default {
    title: "CTA/Textarea",
    component: Textarea,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <Textarea {...args} />

export const Default = Template.bind({});
Default.args = {
    size: "default",
    rows: 4, 
    label: "Default Textarea",
    placeholder: "generate cross-platform Soft"
}

export const Small = Template.bind({});
Small.args = {
    size: "small",
    rows: 2,
    label: "Small Textarea",
    placeholder: "Indonesia primary Card"
}

export const Large = Template.bind({});
Large.args = {
    size: "large",
    rows: 12,
    label: "Large Textarea",
    placeholder: "Data extend panel"
}