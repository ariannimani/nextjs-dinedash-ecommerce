import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Price } from './Price';

test('Price', () => {
  render(<Price testId="price">Price</Price>);
  expect(screen.getByTestId('price')).toBeInTheDocument();
});
