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
    img_uri: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/aa/OoT_English_Logo.png/revision/latest/scale-to-width-down/250?cb=20170127011532&format=original",
    titles: ["Particuliers", "Professionnels", "À props de Forsa"],
    actions: ["Login", "Register"]
}