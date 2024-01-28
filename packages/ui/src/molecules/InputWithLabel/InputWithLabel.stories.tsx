import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputWithLabel } from "./InputWithLabel";

const meta: Meta<typeof InputWithLabel> = {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Primary: Story = {
  args: {
    label: "Phone",
  },
};
