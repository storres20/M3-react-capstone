import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Designby from '../components/Designby/Designby';

// configureStore

// render component
const render2 = (component) => rtlRender(
  <BrowserRouter>
    {component}
  </BrowserRouter>,
);

beforeEach(() => {
  render2(<Designby />);
});

// Test
describe('<Designby />', () => {
  it('Design by', () => {
    expect(screen.getByTestId('designby')).toBeInTheDocument();
    // screen.debug();
  });
});
