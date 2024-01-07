import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { CategoryCardProps } from "./CategoryCard";
import { CategoryCard } from "./CategoryCard";

export default {
  title: "Molecules/CategoryCard",
  component: CategoryCard,
} as Meta;

const CategoryCardComponent: Story<CategoryCardProps> = (args) => (
  <CategoryCard {...args} />
);

export const Default = CategoryCardComponent.bind({});
Default.args = {
  image: "",
  alt: "rissoto",
  title: "Lunch",
};
