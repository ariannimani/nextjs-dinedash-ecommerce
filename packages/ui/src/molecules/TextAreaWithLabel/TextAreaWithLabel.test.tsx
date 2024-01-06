import React from 'react';
import { render, screen } from '../../helpers/tests';
import { TextAreaWithLabel } from './TextAreaWithLabel';

test('TextAreaWithLabel', () => {
  render(<TextAreaWithLabel testId="textAreaWithLabel">TextAreaWithLabel</TextAreaWithLabel>);
  expect(screen.getByTestId('textAreaWithLabel')).toBeInTheDocument();
});
