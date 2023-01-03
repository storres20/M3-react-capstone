import React from 'react';
import renderer from 'react-test-renderer';
import Designby from '../components/Designby/Designby';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Designby />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
