import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { TextAreaProps } from './TextArea';
import { TextArea } from './TextArea';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta;

const TextAreaComponent: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = TextAreaComponent.bind({});
Default.args = {
  children: 'Story of TextArea',
};
