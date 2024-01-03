---
to: <%= path_from_root %>.test.tsx
---

import React from 'react';
import { render, screen } from '../../helpers/tests';
import { <%= name %> } from './<%= name%>';

test('<%= name %>', () => {
  render(<<%= name %> testId="<%= h.inflection.camelize(name, true) %>"><%= name %></<%= name %>>);
  expect(screen.getByTestId('<%= h.inflection.camelize(name, true) %>')).toBeInTheDocument();
});
