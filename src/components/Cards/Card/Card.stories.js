import React from 'react';
import Card from './Card';
import Center from "../../Utils/Center";

export default {
    title: "Dashboard/Card",
    component: Card,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});
Default.args = {
    title: "Hi Voyage",
    subtitle: "Zak Nani est gros", 
    cardDesc: "Intranet extensible Factors",
    image: "https://images.pexels.com/photos/15283480/pexels-photo-15283480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    imageDesc: "Cool cake & berries", 
}

export const LongText = Template.bind({});
LongText.args = {
    title: "Hello Voyage Soleil",
    subtitle: "Zak Nani est gros", 
    cardDesc: "Soleil et mer des cités mayènnes qui reflètent sa splendeur.",
    image: "https://images.pexels.com/photos/15283480/pexels-photo-15283480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    imageDesc: "Cool cake & berries", 
}