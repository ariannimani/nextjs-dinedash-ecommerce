import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BonusCard } from "./BonusCard";

const meta: Meta<typeof BonusCard> = {
  title: "Molecules/BonusCard",
  component: BonusCard,
};

export default meta;
type Story = StoryObj<typeof BonusCard>;

export const Primary: Story = {
  args: {
    title: "Bonus points",
    content:
      "Every time you spend 100$, you get 1 bonus point. Bonuses can be spent on featured products.",
    buttonTitle: "Send",
  },
};
