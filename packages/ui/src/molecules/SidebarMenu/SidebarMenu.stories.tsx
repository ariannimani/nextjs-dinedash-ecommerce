import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { SidebarMenuProps } from './SidebarMenu';
import { SidebarMenu } from './SidebarMenu';

export default {
  title: 'Molecules/SidebarMenu',
  component: SidebarMenu,
} as Meta;

const SidebarMenuComponent: Story<SidebarMenuProps> = (args) => <SidebarMenu {...args} />;

export const Default = SidebarMenuComponent.bind({});
Default.args = {
  children: 'Story of SidebarMenu',
};
