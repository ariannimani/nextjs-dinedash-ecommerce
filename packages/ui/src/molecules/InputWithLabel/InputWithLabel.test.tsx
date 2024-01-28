import React from 'react';
import { render, screen } from '../../helpers/tests';
import { InputWithLabel } from './InputWithLabel';

test('InputWithLabel', () => {
  render(<InputWithLabel testId="inputWithLabel">InputWithLabel</InputWithLabel>);
  expect(screen.getByTestId('inputWithLabel')).toBeInTheDocument();
});
