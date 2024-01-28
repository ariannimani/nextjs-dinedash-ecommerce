import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CategoryCard } from "./CategoryCard";
import Rissoto from "../../assets/images/rissoto.png";

const meta: Meta<typeof CategoryCard> = {
  title: "Molecules/CategoryCard",
  component: CategoryCard,
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Primary: Story = {
  args: {
    category: {
      image: Rissoto,
      title: "Lunch",
    },
  },
};
