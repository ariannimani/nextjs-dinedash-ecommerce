import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Quantifier } from "./Quantifier";

const meta: Meta<typeof Quantifier> = {
  title: "Molecules/Quantifier",
  component: Quantifier,
};

export default meta;
type Story = StoryObj<typeof Quantifier>;

export const Primary: Story = {
  args: {
    quantity: 10,
  },
};
