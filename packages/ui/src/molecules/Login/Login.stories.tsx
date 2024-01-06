import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { LoginProps } from './Login';
import { Login } from './Login';

export default {
  title: 'Molecules/Login',
  component: Login,
} as Meta;

const LoginComponent: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = LoginComponent.bind({});
Default.args = {
  children: 'Story of Login',
};
