import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";



describe('For each input field, add a unit test to validate that the correct attributes are applied to the HTML element.', () => {
  test('Date input field is in the document', () => {
    render(<BookingForm defaultTimes={['17:00']} />)

    const dateInput = screen.getByLabelText('Choose date', { selector: 'input' });

    expect(dateInput).toBeInTheDocument();
  })

  test('Time input field is in the document', () => {
    render(<BookingForm defaultTimes={['17:00']} />)

    const timeInput = screen.getByRole('option', { name: '17:00' });

    expect(timeInput).toBeInTheDocument();
  })

  test('Guests input field is in the document', () => {
    render(<BookingForm defaultTimes={['17:00']} />)

    const guestInput = screen.getByLabelText('Number of guests', { selector: 'input' });

    expect(guestInput).toBeInTheDocument();
  })


  test('Occasion input field is in the document', () => {
    render(<BookingForm defaultTimes={['17:00']} />)

    const occasionInput = screen.getByLabelText('Occasion',{selector: 'select'} )
    expect(occasionInput).toBeInTheDocument();
  })

  test('Submit button in the document', () => {
    render(<BookingForm defaultTimes={['17:00']} />)

    const confirmButton = screen.getByText('Make Your Reservation');

    expect(confirmButton).toBeInTheDocument();
  })

});

describe('Add unit tests for JavaScript validation functions', () => {

  test('Submit Button is Disabled if Date input field is empty', () => {
    render(<BookingForm defaultTimes={['17:00']} />);

    const dateInput = screen.getByLabelText('Choose date', { selector: 'input' });

    fireEvent.click(dateInput);

    const confirmButton = screen.getByText('Make Your Reservation');

    expect(confirmButton).toHaveAttribute('disabled');

  })

  test('Submit Button is Disabled if Guest option field is empty', () => {
    render(<BookingForm defaultTimes={['17:00']} setDate={'08/16/2024'}/>);
    const guestInput = screen.getByLabelText('Number of guests', { selector: 'input' });

    fireEvent.focus(guestInput);
    fireEvent.change(guestInput, {target: {value: ''}});

    const confirmButton = screen.getByText('Make Your Reservation');

    expect(guestInput.getAttribute('value')).toBe('');
    expect(confirmButton).toHaveAttribute('disabled');

  })

   test('Submit Button is Enabled if all input fields are filled in', () => {
    render(<BookingForm defaultTimes={['17:00']} setDate={'08/16/2024'}/>);
    const confirmButton = screen.getByText('Make Your Reservation');

    expect(confirmButton).toHaveAttribute("disabled", "");

  })

});

