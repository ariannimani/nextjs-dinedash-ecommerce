import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Logo } from './Logo';

test('Logo', () => {
  render(<Logo testId="logo">Logo</Logo>);
  expect(screen.getByTestId('logo')).toBeInTheDocument();
});
