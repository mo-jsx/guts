import React from "react";
import DropDown from "./DropDown";
import Center from "../../../Utils/Center";

export default {
    title: "Navigation/Dropdown",
    component: DropDown,
    decorators: [
        (Story) => (
            <Center>
                <Story />
            </Center>
        ),
    ],
};

const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Haha",
    label_bgc: "primary",
    options: [
        {
            icon: "😲",
            content: "Fingerprint Login",
        },
        {
            icon: "😲",
            content: "Fingerprint Login",
        },
        {
            icon: "😲",
            content: "Fingerprint Login",
        },
        {
            icon: "😲",
            content: "Fingerprint Login",
        },
    ],
};
