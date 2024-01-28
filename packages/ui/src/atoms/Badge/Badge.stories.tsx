import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",

  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = { args: { children: 3 } };
