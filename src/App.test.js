import { render, screen} from "@testing-library/react";
import FormikBookimgForm from "./components/FormikBookingForm";



describe('should correctly set default option', () => {

  test('occasion option should be in document', () => {
    render(<FormikBookimgForm defaultTimes={['17:00']} />)
    expect(screen.getByRole('option', {name: 'Select time'})).toBeInTheDocument();
  })

});