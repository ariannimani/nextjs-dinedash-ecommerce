import React from 'react';
import { render, screen } from '../../helpers/tests';
import { BonusCard } from './BonusCard';

test('BonusCard', () => {
  render(<BonusCard testId="bonusCard">BonusCard</BonusCard>);
  expect(screen.getByTestId('bonusCard')).toBeInTheDocument();
});
