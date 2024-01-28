import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";
import { StarOutlineIcon } from "../../icons";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    children: "5.0",
    variant: "primary",
    icon: <StarOutlineIcon />,
  },
};
export const Secondary: Story = {
  args: {
    children: "5.0",
    variant: "secondary",
    icon: <StarOutlineIcon />,
  },
};
