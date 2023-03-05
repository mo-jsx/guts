import React from 'react';
import Footer from './Footer';
import Center from "../../Utils/Center";

export default {
    title: "Navigation/Footer",
    component: Footer,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <Footer {...args} />

export const Default = Template.bind({});
Default.args = {
    sections: [
        {
            name: "About",
            titles: ["Haha", "Hoho", "Hehe"]
        },
        {
            name: "About",
            titles: ["Haha", "Hoho", "Hehe"]
        },
        {
            name: "About",
            titles: ["Haha", "Hoho", "Hehe"]
        },
        {
            name: "About",
            titles: ["Haha", "Hoho", "Hehe"]
        }
    ]
}