---
to: <%= path_from_root %>.stories.tsx
---
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { <%= name %> } from './<%= name %>';

const meta: Meta<typeof <%= name %>> = {
  title: '<%= h.inflection.pluralize(type) %>/<%= name %>',
  component: <%= name %>,
};

export default meta;
type Story = StoryObj<typeof <%= name %>>;

export const Primary: Story = {
  args:
  {  children: 'Story of <%= name %>' }};
