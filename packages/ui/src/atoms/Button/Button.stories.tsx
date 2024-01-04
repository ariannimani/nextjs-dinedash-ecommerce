import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: "primary",
  children: "Button with Icon",
  icon: (
    <span role="img" aria-label="icon">
      🚀
    </span>
  ),
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  variant: "primary",
  children: "Custom Style Button",
  style: { backgroundColor: "purple", color: "white" },
};
