import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Quantifier } from './Quantifier';

test('Quantifier', () => {
  render(<Quantifier testId="quantifier">Quantifier</Quantifier>);
  expect(screen.getByTestId('quantifier')).toBeInTheDocument();
});
