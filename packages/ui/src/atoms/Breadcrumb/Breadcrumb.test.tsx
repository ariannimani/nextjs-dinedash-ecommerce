import React from 'react';
import { render, screen } from '../../helpers/tests';
import { Breadcrumb } from './Breadcrumb';

test('Breadcrumb', () => {
  render(<Breadcrumb testId="breadcrumb">Breadcrumb</Breadcrumb>);
  expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
});
