import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App integration tests', () => {

  // Mock alert before each test
  beforeAll(() => {
    window.alert = jest.fn();  // Mock window.alert
  });

  it('should display error messages for invalid inputs', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: '123John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe@!' } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'Paris1' } });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), { target: { value: '1234' } }); // Invalid postal code
    fireEvent.change(screen.getByLabelText(/Birth Date/i), { target: { value: '2022-01-01' } }); // Under 18

    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/Email is not valid/i)).toBeInTheDocument();
    expect(screen.getByText(/First name must not contain special characters or numbers/i)).toBeInTheDocument();
    expect(screen.getByText(/Last name must not contain special characters or numbers/i)).toBeInTheDocument();
    expect(screen.getByText(/City name must not contain special characters or numbers/i)).toBeInTheDocument();
    expect(screen.getByText(/Postal code must be exactly 5 digits/i)).toBeInTheDocument();
    expect(screen.getByText(/You must be at least 18 years old/i)).toBeInTheDocument();
  });

  it('should submit the form successfully with valid inputs', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'Paris' } });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), { target: { value: '75001' } });
    fireEvent.change(screen.getByLabelText(/Birth Date/i), { target: { value: '2000-01-01' } });

    fireEvent.click(screen.getByText(/submit/i));

    expect(window.alert).toHaveBeenCalledWith('Form submitted successfully!');
  });
});