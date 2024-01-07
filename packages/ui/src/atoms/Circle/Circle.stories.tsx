import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { CircleProps } from "./Circle";
import { Circle } from "./Circle";
import { TruckSmallOutline } from "../../icons";

export default {
  title: "Atoms/Circle",
  component: Circle,
} as Meta;

const CircleComponent: Story<CircleProps> = (args) => <Circle {...args} />;

export const Default = CircleComponent.bind({});
Default.args = {
  children: <TruckSmallOutline />,
};
