import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Details } from './Details';

test('Details', () => {
  render(<Details testId="details">Details</Details>);
  expect(screen.getByTestId('details')).toBeInTheDocument();
});
