import React from 'react';
import { render, screen } from '../../helpers/tests';
import { MenuItem } from './MenuItem';

test('MenuItem', () => {
  render(<MenuItem testId="menuItem">MenuItem</MenuItem>);
  expect(screen.getByTestId('menuItem')).toBeInTheDocument();
});
