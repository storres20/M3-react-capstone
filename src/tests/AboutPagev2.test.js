import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from '../pages/AboutPage/AboutPage';

// configureStore

// render component
const render2 = (component) => rtlRender(
  <BrowserRouter>
    {component}
  </BrowserRouter>,
);

beforeEach(() => {
  render2(<AboutPage />);
});

// Test
describe('<AboutPage />', () => {
  it('Title', async () => {
    expect(screen.getByTestId('title')).toBeInTheDocument();
    // screen.debug();
  });

  it('Paragraph', () => {
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
  });

  it('Wrapper', () => {
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });

  it('Scroll Button', () => {
    expect(screen.getByTestId('ScrollButton')).toBeInTheDocument();
  });
});
