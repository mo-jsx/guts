import React from 'react';
import Input from "./Input";
import Center from "../../Utils/Center";

export default {
    title: "CTA/Simple Input",
    component: Input,
    decorators: [Story => <Center><Story /></Center>] 
}

const Template = args => <Input {...args} />

export const Default = Template.bind({});
Default.args = {
    size: "medium",
    label: "Medium",
    placeholder: "Medium input field"
}

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Small",
    placeholder: "Small input field"
}


export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Large",
    placeholder: "Large input field"
}