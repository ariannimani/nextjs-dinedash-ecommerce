import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Button } from './Button';

test('Button', () => {
  render(<Button testId="button">Button</Button>);
  expect(screen.getByTestId('button')).toBeInTheDocument();
});
