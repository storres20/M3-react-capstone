import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavbarRB from '../components/Navbar/NavbarRB';

// configureStore

// render component
const render2 = (component) => rtlRender(
  <BrowserRouter>
    {component}
  </BrowserRouter>,
);

beforeEach(() => {
  render2(<NavbarRB />);
});

// Test
describe('<NavbarRB />', () => {
  it('Nav Brand', async () => {
    expect(screen.getByTestId('nav-brand')).toBeInTheDocument();
    // screen.debug();
  });

  it('Nav Links', () => {
    expect(screen.getByTestId('nav-links')).toBeInTheDocument();
  });

  it('Design by', () => {
    expect(screen.getByTestId('designby')).toBeInTheDocument();
  });
});
