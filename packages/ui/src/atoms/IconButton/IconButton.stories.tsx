import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { UserIcon } from "../../icons";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: { variant: "primary", children: <UserIcon /> },
};
export const Secondary: Story = {
  args: { variant: "secondary", children: <UserIcon /> },
};
