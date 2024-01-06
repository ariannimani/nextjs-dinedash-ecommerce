import React from 'react';
import { render, screen } from '../../helpers/tests';
import { SidebarMenu } from './SidebarMenu';

test('SidebarMenu', () => {
  render(<SidebarMenu testId="sidebarMenu">SidebarMenu</SidebarMenu>);
  expect(screen.getByTestId('sidebarMenu')).toBeInTheDocument();
});
