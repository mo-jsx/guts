import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import Center from "../../Utils/Center";

export default {
    title: "Buttons/Simple Button",
    component: Button,
    decorators: [
        (Story) => (
            <Center>
                <Story />
            </Center>
        ),
    ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: "primary", label: "Primary" };

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
    variant: "primary-outlined",
    label: "Primary Outlined",
};

export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary", label: "Secondary" };

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
    variant: "secondary-outlined",
    label: "Secondary Outlined",
};
