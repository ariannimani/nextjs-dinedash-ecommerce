import React from 'react';
import { render, screen } from '../../helpers/tests';
import { ToggleSwitchWithLabel } from './ToggleSwitchWithLabel';

test('ToggleSwitchWithLabel', () => {
  render(<ToggleSwitchWithLabel testId="toggleSwitchWithLabel">ToggleSwitchWithLabel</ToggleSwitchWithLabel>);
  expect(screen.getByTestId('toggleSwitchWithLabel')).toBeInTheDocument();
});
