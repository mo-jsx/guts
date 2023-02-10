import React from 'react';
import HeaderMenu from './HeaderMenu';
import Center from "../../../Utils/Center";

export default {
    title: "Navigation/Header Menu",
    component: HeaderMenu,
    // decoratos: [Story => <Center><Story /></Center>]
}

const Template = args => <HeaderMenu {...args} />

export const Default = Template.bind({});
Default.args = {
    titles: ["Particuliers", "Professionnels", "À props de Forsa"]
}