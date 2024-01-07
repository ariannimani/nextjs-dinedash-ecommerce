import React from 'react';
import { render, screen } from '../../helpers/tests';
import { PromoCard } from './PromoCard';

test('PromoCard', () => {
  render(<PromoCard testId="promoCard">PromoCard</PromoCard>);
  expect(screen.getByTestId('promoCard')).toBeInTheDocument();
});
