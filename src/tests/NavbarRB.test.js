import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavbarRB from '../components/Navbar/NavbarRB';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavbarRB />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
