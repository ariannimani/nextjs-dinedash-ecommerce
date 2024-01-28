import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Circle } from "./Circle";
import { TruckSmallOutline } from "../../icons";

const meta: Meta<typeof Circle> = {
  title: "Atoms/Circle",
  component: Circle,
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Primary: Story = { args: { children: <TruckSmallOutline /> } };
