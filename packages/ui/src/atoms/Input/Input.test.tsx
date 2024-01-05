import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Input } from './Input';

test('Input', () => {
  render(<Input testId="input">Input</Input>);
  expect(screen.getByTestId('input')).toBeInTheDocument();
});
