import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { SearchIcon } from "../../icons";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = { args: { icon: <SearchIcon /> } };
