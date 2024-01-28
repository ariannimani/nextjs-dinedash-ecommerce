import React from 'react';
import { render, screen } from '../../helpers/tests';
import { IconButton } from './IconButton';

test('IconButton', () => {
  render(<IconButton testId="iconButton">IconButton</IconButton>);
  expect(screen.getByTestId('iconButton')).toBeInTheDocument();
});
