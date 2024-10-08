import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Counter increments and decrements when the buttons are clicked', () => {
  render(<App />);
  const button = screen.getByRole('button');
    const count = screen.getByTestId('count');
    expect(button).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent('0');
    fireEvent.click(button);
    expect(count).toHaveTextContent('1');
});
