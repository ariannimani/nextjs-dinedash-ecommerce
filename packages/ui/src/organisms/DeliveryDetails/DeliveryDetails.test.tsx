import React from 'react';
import { render, screen } from '../../helpers/tests';
import { DeliveryDetails } from './DeliveryDetails';

test('DeliveryDetails', () => {
  render(<DeliveryDetails testId="deliveryDetails">DeliveryDetails</DeliveryDetails>);
  expect(screen.getByTestId('deliveryDetails')).toBeInTheDocument();
});
