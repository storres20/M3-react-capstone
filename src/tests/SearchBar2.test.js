import React from 'react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test TargetComponent', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
    thing1: 'this is thing1',
  };

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  it('renders correctly', () => {
    // Create a redux store
    const component = renderer.create(
      <SearchBar />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
