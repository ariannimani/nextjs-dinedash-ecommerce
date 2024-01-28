import React from 'react';
import { render, screen } from '../../helpers/tests';
import { CartItem } from './CartItem';

test('CartItem', () => {
  render(<CartItem testId="cartItem">CartItem</CartItem>);
  expect(screen.getByTestId('cartItem')).toBeInTheDocument();
});
