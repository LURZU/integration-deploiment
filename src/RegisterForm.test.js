import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from './components/RegisterForm';

describe('RegisterForm component', () => {


    it('should have empty fields and the submit button should be disabled initially', async () => {
        render(<RegisterForm />);

        const submitButton = await screen.findByTestId('submit-button');
        expect(submitButton).toBeDisabled();

    });





});