import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { InputProps } from './Input';
import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const InputComponent: Story<InputProps> = (args) => <Input {...args} />;

export const Default = InputComponent.bind({});
Default.args = {
  children: 'Story of Input',
};
