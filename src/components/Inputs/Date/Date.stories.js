import React from 'react';
import Date from './Date';
import Center from "../../Utils/Center";

export default {
    title: "CTA/Date",
    component: Date,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <Date {...args} />

export const Default = Template.bind({});
Default.args = {
    label: "Enter your birthday : "
}