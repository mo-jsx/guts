import FlatButton from "./FlatButton";
import Center from "../../Utils/Center";

export default {
    title: "Buttons/Flat Button",
    component: FlatButton,
    decorators: [Story => <Center><Story /></Center>]
}

const Template = args => <FlatButton {...args} />

export const FlatButtonWhite = Template.bind({});
FlatButtonWhite.args = { variant: "white", label: "White Button" }

export const FlatButtonCrimson = Template.bind({});
FlatButtonCrimson.args = { variant: "crimson", label: "Crimson Button" }

export const FlatButtonDark = Template.bind({});
FlatButtonDark.args = { variant: "dark", label: "Dark Button" }