import React from 'react';
import { render, screen } from '../../helpers/tests';
import { OrderCard } from './OrderCard';

test('OrderCard', () => {
  render(<OrderCard testId="orderCard">OrderCard</OrderCard>);
  expect(screen.getByTestId('orderCard')).toBeInTheDocument();
});
