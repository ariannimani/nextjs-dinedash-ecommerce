import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { ToggleSwitchWithLabelProps } from "./ToggleSwitchWithLabel";
import { ToggleSwitchWithLabel } from "./ToggleSwitchWithLabel";

export default {
  title: "Molecules/ToggleSwitchWithLabel",
  component: ToggleSwitchWithLabel,
} as Meta;

const ToggleSwitchWithLabelComponent: Story<ToggleSwitchWithLabelProps> = (
  args,
) => <ToggleSwitchWithLabel {...args} />;

export const Default = ToggleSwitchWithLabelComponent.bind({});
Default.args = {
  label: "Via Email",
};
