import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { InputWithLabelProps } from "./InputWithLabel";
import { InputWithLabel } from "./InputWithLabel";

export default {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
} as Meta;

const InputWithLabelComponent: Story<InputWithLabelProps> = (args) => (
  <InputWithLabel {...args} />
);

export const Default = InputWithLabelComponent.bind({});
Default.args = {
  label: "Phone",
};
