import { useRef, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";

const BookingForm = ({ defaultTimes, handleDateChange, setDate, submitForm }) => {

    const [state, setState] = useState({
        date: "",
        time: "",
        guests: "1",
        occasion: "Birthday",
    });


    const handleSubmit = () => {
        submitForm(state);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;

        if (e.target.name === 'date') {
            handleDateChange(setDate(e.target.value));
            console.log(e.target.value);
        }

        //console.log(e.target.name);
        //console.log(e.target.value);
        setState({ ...state, [e.target.name]: value });

    }

    return (
        <Box
            bg="#495E57"
            margin='0'
            maxH={450}
        >
            <VStack
                fontFamily='karla'
            >
                <form style={{
                    display: 'flex',
                    flexFlow: 'column',
                    width: '70%',
                    gap: 20
                }}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        name="date"
                        id="res-date"
                        value={state.date}
                        onChange={handleChange}
                    />
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                    >
                        {defaultTimes.map((time, index) => (

                            <option
                                name="time"
                                value={state.time}
                                onChange={handleChange}
                                key={index}
                            >{time}</option>
                        ))
                        }

                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        name="guests"
                        placeholder='Number of guests'
                        min={1}
                        max={10}
                        id="guests"
                        value={state.guests}
                        onChange={handleChange}
                    />
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={state.occasion}
                        onChange={handleChange}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input type="submit"
                        value="Make Your reservation"
                    ></input>
                </form>
            </VStack>
        </Box>
    );

}
export default BookingForm;