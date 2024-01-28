import React from 'react';
import { render, screen } from '../../helpers/tests';
import { DeliveryMap } from './DeliveryMap';

test('DeliveryMap', () => {
  render(<DeliveryMap testId="deliveryMap">DeliveryMap</DeliveryMap>);
  expect(screen.getByTestId('deliveryMap')).toBeInTheDocument();
});
