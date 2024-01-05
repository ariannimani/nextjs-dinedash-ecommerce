import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Header } from './Header';

test('Header', () => {
  render(<Header testId="header">Header</Header>);
  expect(screen.getByTestId('header')).toBeInTheDocument();
});
