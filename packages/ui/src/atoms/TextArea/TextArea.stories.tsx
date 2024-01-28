import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Atoms/TextArea",
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {};
