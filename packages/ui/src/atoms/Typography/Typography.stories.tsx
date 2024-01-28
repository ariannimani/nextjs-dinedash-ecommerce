import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = { args: { children: "Text" } };
