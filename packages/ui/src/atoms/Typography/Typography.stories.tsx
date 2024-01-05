import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { TypographyProps } from './Typography';
import { Typography } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta;

const TypographyComponent: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = TypographyComponent.bind({});
Default.args = {
  children: 'Story of Typography',
};
