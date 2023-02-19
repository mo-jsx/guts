import React from 'react';
import Breadcumber from './Breadcumber';
import Center from "../../Utils/Center";

export default {
    title: "Navigation/Breadcumber",
    component: Breadcumber,
    decorators: [Story => <Center><Story /></Center>],
}

const Template = args => <Breadcumber {...args} />

export const Default = Template.bind({});
Default.args = {
    history: ["Accueil", "Produits", "Detroit Smash"]
}