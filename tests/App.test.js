import React from 'react';
import '@testing-library/react-native/extend-expect';
import { render, screen } from '@testing-library/react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import App from '../App';
import Users from '../Components/Users';

jest.mock('../Components/Users', () => jest.fn(() => null)); // Mock Users component

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<App />);
  });

  it('renders a SafeAreaView', () => {
    render(<App />);
    expect(screen.UNSAFE_getByType(SafeAreaView)).toBeTruthy();
  });

  // it('renders a StatusBar with style "auto"', () => {
  //   render(<App />);
  //   const statusBar = screen.UNSAFE_getByType(StatusBar);
  //   expect(statusBar.props.barStyle).toBe('dark-content');
  // });

  it('renders the Users component', () => {
    render(<App />);
    expect(Users).toHaveBeenCalled();
  });
});