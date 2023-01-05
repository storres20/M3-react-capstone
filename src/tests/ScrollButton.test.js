import React from 'react';
import renderer from 'react-test-renderer';
import ScrollButton from '../components/ScrollButton/ScrollButton';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ScrollButton />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
