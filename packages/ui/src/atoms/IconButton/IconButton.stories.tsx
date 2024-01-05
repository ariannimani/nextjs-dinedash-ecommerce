import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { IconButtonProps } from './IconButton';
import { IconButton } from './IconButton';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
} as Meta;

const IconButtonComponent: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = IconButtonComponent.bind({});
Default.args = {
  children: 'Story of IconButton',
};
