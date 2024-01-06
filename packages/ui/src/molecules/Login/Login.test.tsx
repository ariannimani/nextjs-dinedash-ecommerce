import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Login } from './Login';

test('Login', () => {
  render(<Login testId="login">Login</Login>);
  expect(screen.getByTestId('login')).toBeInTheDocument();
});
