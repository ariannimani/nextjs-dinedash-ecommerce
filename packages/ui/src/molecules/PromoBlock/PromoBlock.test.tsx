import React from 'react';
import { render, screen } from '../../helpers/tests';
import { PromoBlock } from './PromoBlock';

test('PromoBlock', () => {
  render(<PromoBlock testId="promoBlock">PromoBlock</PromoBlock>);
  expect(screen.getByTestId('promoBlock')).toBeInTheDocument();
});
