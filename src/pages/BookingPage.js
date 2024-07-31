import { Grid } from "@chakra-ui/react";
import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";



const BookingPage = () => {
    // const defaultTimes = ['17:00', '18:00', '19:00']

    const navigate = useNavigate();

    const seededRandom = (seed) => {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    };

    const fetchAPI = (date) => {
        let result = [];
        let random = seededRandom(date);

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = (formData) => {
        return true;
    };

    const submitForm = (formData) => {
        console.log(formData);

        if (submitAPI(formData)) {
            navigate('/bookingconfirm');
        };

    }

    const initializeTimes = () => {

        return fetchAPI(new Date());

    };

    const updateTimes = (state, action) => {
        const newItems = fetchAPI(new Date(action.date));
        //console.log(new Date(action.date));
        //console.log(newItems.count);
        return newItems;
    };


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [date, setDate] = useState('');


    return (
        <Grid
            templateAreas={`'nav'
                             'hero'
                             'booking'
                             'footer'`
            }
            gridTemplateRows={'1fr'}
            gridTemplateColumns={'1fr'}
        >

            <Navbar area={'nav'} />
            <BookingForm area={'booking'}
                submitForm={submitForm}
                defaultTimes={availableTimes}
                setDate={setDate}
                handleDateChange={() => dispatch({ date: date })}
            />
            <Footer area={'footer'} />

        </Grid>

    );
}

export default BookingPage;