import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Tag } from './Tag';

test('Tag', () => {
  render(<Tag testId="tag">Tag</Tag>);
  expect(screen.getByTestId('tag')).toBeInTheDocument();
});
