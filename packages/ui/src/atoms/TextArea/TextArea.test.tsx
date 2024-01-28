import React from 'react';
import { render, screen } from '../../helpers/tests';
import { TextArea } from './TextArea';

test('TextArea', () => {
  render(<TextArea testId="textArea">TextArea</TextArea>);
  expect(screen.getByTestId('textArea')).toBeInTheDocument();
});
