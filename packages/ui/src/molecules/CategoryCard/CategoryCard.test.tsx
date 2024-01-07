import React from 'react';
import { render, screen } from '../../helpers/tests';
import { CategoryCard } from './CategoryCard';

test('CategoryCard', () => {
  render(<CategoryCard testId="categoryCard">CategoryCard</CategoryCard>);
  expect(screen.getByTestId('categoryCard')).toBeInTheDocument();
});
