import { useEffect, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";


const BookingForm = ({ defaultTimes, handleDateChange, setDate, submitForm }) => {

    const [newdate, setNewDate] = useState('');
    const [time, setTime] = useState(defaultTimes[0]);
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');

    useEffect(() => { setTime(defaultTimes[0]) }, [defaultTimes]);

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(JSON.stringify({ newdate, time, guests, occasion }, null, 2));
        //submitForm({newdate, time, guests, occasion });
    }

    const handleDate = (e) => {
        e.preventDefault();
        const value = e.target.value;

        setNewDate(value);
        handleDateChange(setDate(value));

        console.log(newdate);
    }

    const handleTime = (e) => {
        e.preventDefault();
        setTime(e.target.value);
        console.log(time);
    }

    const handleGuests = (e) => {
        e.preventDefault();
        setGuests(e.target.value);
    }

    const handleOccasion = (e) => {
        e.preventDefault();
        setOccasion(e.target.value);
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
                        value={newdate}
                        onChange={handleDate}
                    />
                    {!newdate ? (
                        <p className="error">
                            Please choose booking date
                        </p>
                    ) : null}
                    <label htmlFor="time">Choose time</label>
                    <select
                        name="time"
                        id="time"
                        value={time}
                        onChange={handleTime}
                    >
                        {defaultTimes.map((time, index) => (

                            <option
                                id='time'
                                name="time"
                                key={index}
                            >{time}</option>
                        ))
                        }

                    </select>
                    {!time ? (
                        <p className="error">
                            Please choose boking time
                        </p>
                    ) : null}
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        name="guests"
                        placeholder='Number of guests'
                        min={1}
                        max={10}
                        id="guests"
                        value={guests}
                        onChange={handleGuests}
                    />
                    {guests < 1 || guests > 10 ? (
                        <p className="error">
                            The number of guests should be at least 1 and no more than 10
                        </p>
                    ) : null}
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={occasion}
                        onChange={handleOccasion}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {!occasion ? (
                        <p className="error">
                            Pelase choose occasion
                        </p>
                    ) : null}
                    <input type="submit"
                        value="Make Your reservation"
                    ></input>
                </form>
            </VStack>
        </Box>
    );

}
export default BookingForm;