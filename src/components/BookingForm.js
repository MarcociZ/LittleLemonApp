import { useRef, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";

const BookingForm = ({ defaultTimes, handleTimeChange, setDate }) => {

    const timeRef = useRef();
    const [number, setNumber] = useState('');
    const [ocassion, setOcassion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.date.value);
        console.log(timeRef.current.value);
        console.log(event.target.guests.value);

    };

    const handleDateChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleOcassionChange = (event) => {
        setOcassion(event.target.value);
    };

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
                        onChange={handleDateChange}
                    />
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        ref={timeRef}
                        onChange={handleTimeChange}
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
                        value={number}
                        onChange={handleNumberChange}
                    />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                        value={ocassion}
                        onChange={handleOcassionChange}
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