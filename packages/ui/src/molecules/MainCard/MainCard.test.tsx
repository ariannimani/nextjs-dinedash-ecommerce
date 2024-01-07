import React from 'react';
import { render, screen } from '../../helpers/tests';
import { MainCard } from './MainCard';

test('MainCard', () => {
  render(<MainCard testId="mainCard">MainCard</MainCard>);
  expect(screen.getByTestId('mainCard')).toBeInTheDocument();
});
