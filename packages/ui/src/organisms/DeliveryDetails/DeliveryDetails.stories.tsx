import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DeliveryDetails } from "./DeliveryDetails";

const meta: Meta<typeof DeliveryDetails> = {
  title: "Organisms/DeliveryDetails",
  component: DeliveryDetails,
};

export default meta;
type Story = StoryObj<typeof DeliveryDetails>;

export const Primary: Story = {};
