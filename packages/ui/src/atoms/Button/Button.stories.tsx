import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Primary Button" },
};
export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary Button" },
};
export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: "Button with Icon",
    icon: (
      <span role="img" aria-label="icon">
        🚀
      </span>
    ),
  },
};
export const CustomStyle: Story = {
  args: {
    variant: "primary",
    children: "Custom Style Button",
    style: { backgroundColor: "purple", color: "white" },
  },
};
