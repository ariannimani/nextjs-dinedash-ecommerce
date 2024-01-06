import React from 'react';
import { render, screen } from '../../helpers/tests';
import { ToggleSwitch } from './ToggleSwitch';

test('ToggleSwitch', () => {
  render(<ToggleSwitch testId="toggleSwitch">ToggleSwitch</ToggleSwitch>);
  expect(screen.getByTestId('toggleSwitch')).toBeInTheDocument();
});
