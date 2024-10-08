import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App integration tests', () => {

  it('should display success message after form submission with valid inputs', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'Paris' } });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), { target: { value: '75001' } });
    fireEvent.change(screen.getByLabelText(/Birth Date/i), { target: { value: '2000-01-01' } });

    fireEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText('Form submitted successfully!')).toBeInTheDocument();

    setTimeout(() => {
      expect(screen.queryByText('Form submitted successfully!')).not.toBeInTheDocument();
    }, 4000);
  });
});