import { render, screen, queryHelpers } from "@testing-library/react";

import BookingForm from './components/BookingForm';

it('should correctly set default option', () => {
  render(<BookingForm />)
  expect(screen.getByRole('option', {value: '17:00'}).selected).toBeInTheDocument();
})