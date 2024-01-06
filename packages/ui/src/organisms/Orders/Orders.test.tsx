import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Orders } from './Orders';

test('Orders', () => {
  render(<Orders testId="orders">Orders</Orders>);
  expect(screen.getByTestId('orders')).toBeInTheDocument();
});
