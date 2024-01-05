import React from "react";
import type { Meta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Molecules/Header",
  component: Header,
} as Meta;

const HeaderComponent = () => <Header />;

export const Default = HeaderComponent.bind({});
Default.args = {
  children: "Story of Header",
};
