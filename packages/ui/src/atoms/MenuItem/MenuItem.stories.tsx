import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { MenuItemProps } from './MenuItem';
import { MenuItem } from './MenuItem';

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
} as Meta;

const MenuItemComponent: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const Default = MenuItemComponent.bind({});
Default.args = {
  children: 'Story of MenuItem',
};
