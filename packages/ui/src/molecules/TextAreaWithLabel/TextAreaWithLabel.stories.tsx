import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaWithLabel } from "./TextAreaWithLabel";

const meta: Meta<typeof TextAreaWithLabel> = {
  title: "Molecules/TextAreaWithLabel",
  component: TextAreaWithLabel,
};

export default meta;
type Story = StoryObj<typeof TextAreaWithLabel>;

export const Primary: Story = {
  args: {
    placeholder: "type something...",
    label: "Description",
  },
};
