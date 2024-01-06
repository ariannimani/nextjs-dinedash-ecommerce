import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { ToggleSwitchProps } from './ToggleSwitch';
import { ToggleSwitch } from './ToggleSwitch';

export default {
  title: 'Atoms/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

const ToggleSwitchComponent: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = ToggleSwitchComponent.bind({});
Default.args = {
  children: 'Story of ToggleSwitch',
};
