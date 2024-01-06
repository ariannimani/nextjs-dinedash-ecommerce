import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { TextAreaWithLabelProps } from "./TextAreaWithLabel";
import { TextAreaWithLabel } from "./TextAreaWithLabel";

export default {
  title: "Molecules/TextAreaWithLabel",
  component: TextAreaWithLabel,
} as Meta;

const TextAreaWithLabelComponent: Story<TextAreaWithLabelProps> = (args) => (
  <TextAreaWithLabel {...args} />
);

export const Default = TextAreaWithLabelComponent.bind({});
Default.args = {
  label: "Details",
};
