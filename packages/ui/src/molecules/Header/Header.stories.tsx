import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
