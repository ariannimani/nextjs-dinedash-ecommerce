import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Circle } from './Circle';

test('Circle', () => {
  render(<Circle testId="circle">Circle</Circle>);
  expect(screen.getByTestId('circle')).toBeInTheDocument();
});
