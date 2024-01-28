import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StyledLink } from "./StyledLink";

const meta: Meta<typeof StyledLink> = {
  title: "Atoms/StyledLink",
  component: StyledLink,
};

export default meta;
type Story = StoryObj<typeof StyledLink>;

export const Primary: Story = {
  args: {
    href: "",
    children: "Link",
  },
};
export const Active: Story = {
  args: {
    href: "",
    children: "Link",
  },
};
