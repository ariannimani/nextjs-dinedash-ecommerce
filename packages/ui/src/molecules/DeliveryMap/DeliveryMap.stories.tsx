import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DeliveryMap } from "./DeliveryMap";

const meta: Meta<typeof DeliveryMap> = {
  title: "Molecules/DeliveryMap",
  component: DeliveryMap,
};

export default meta;
type Story = StoryObj<typeof DeliveryMap>;

export const Primary: Story = {};
