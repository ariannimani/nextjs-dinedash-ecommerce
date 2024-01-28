import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Typography } from './Typography';

test('Typography', () => {
  render(<Typography testId="typography">Typography</Typography>);
  expect(screen.getByTestId('typography')).toBeInTheDocument();
});
