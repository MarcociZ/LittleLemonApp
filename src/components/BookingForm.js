import { useRef, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";

const BookingForm = ({ defaultTimes, handleDateChange, setDate, submitForm }) => {

    const timeRef = useRef();
    const [state, setState] = useState({
        date: "",
        time: "",
        guests: "2",
        ocassion: "",
    });



    const handleDate = (e) => {
        handleDateChange(setDate(e.target.value));
        // console.log(e.target.value);
    };

    const handleSubmit = () => {
        submitForm(state);
    }

    const handleChange = (e) => {
        const value = e.target.value;
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
                        ref={timeRef}
                        value={state.time}
                        onChange={handleChange}
                    >
                        {defaultTimes.map((time) => (

                            <option
                                key={time}
                            >{time}</option>
                        ))
                        }

                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        name="guests"
                        placeholder={2}
                        min={1}
                        max={10}
                        id="guests"
                        value={state.guests}
                        onChange={handleChange}
                    />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                        value={state.ocassion}
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