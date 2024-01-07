import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { TagProps } from "./Tag";
import { Tag } from "./Tag";

export default {
  title: "Atoms/Tag",
  component: Tag,
} as Meta;

const TagComponent: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = TagComponent.bind({});
Default.args = {
  children: "5.0",
};
