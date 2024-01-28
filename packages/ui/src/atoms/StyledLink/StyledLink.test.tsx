import React from 'react';
import { render, screen } from '../../helpers/tests';
import { StyledLink } from './StyledLink';

test('StyledLink', () => {
  render(<StyledLink testId="styledLink">StyledLink</StyledLink>);
  expect(screen.getByTestId('styledLink')).toBeInTheDocument();
});
