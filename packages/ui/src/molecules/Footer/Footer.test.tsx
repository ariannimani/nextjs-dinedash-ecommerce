import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Footer } from './Footer';

test('Footer', () => {
  render(<Footer testId="footer">Footer</Footer>);
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
