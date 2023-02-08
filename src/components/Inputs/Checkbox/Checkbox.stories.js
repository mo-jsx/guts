import Checkbox from "./Checkbox";
import Center from "../../Utils/Center";

export default {
    title: "CTA/Checkbox",
    component: Checkbox,
    decoratos: [Story => <Center><Story /></Center>]
}

const Template = args => <Checkbox {...args} />

export const Default = Template.bind({});
Default.args = {
    label: "Default Checkbox",
    options: ["Haha", "Hoho"],
    orientation: "vertical"
}

export const HorizontalCheckBox = Template.bind({});
HorizontalCheckBox.args = {
    label: "Horizontal Checkbox",
    options: ["Haha", "Hoho"],
    orientation: "horizontal"
}