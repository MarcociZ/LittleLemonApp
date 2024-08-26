import { useEffect, useState } from "react";
import { Box, textDecoration, VStack } from "@chakra-ui/react";


const BookingForm = ({ defaultTimes, handleDateChange, setDate, submitForm }) => {

    const [newdate, setNewDate] = useState('');
    const [time, setTime] = useState(defaultTimes[0]);
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    const [touched, setTouched] = useState(false);

    const onTouched = () => setTouched(true);

    useEffect(() => { setTime(defaultTimes[0]) }, [defaultTimes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify({ newdate, time, guests, occasion }, null, 2));
        submitForm({ newdate, time, guests, occasion });
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

    const isEnabled = newdate.length > 0 && time.length > 0 && guests.length >= 1;
    const labelStyle = { color: '#EDEFEE', fontFamily: 'karla', fontSize: '20px', gap: '1', textDecoration: 'underline'}
    const notificationStyle = { color: '#F4CE14', fontFamily: 'karla', fontSize: '16px' }

    return (
        <Box
            bg="#495E57"
            margin='0'
            //maxH={450}
        >
            <VStack
                fontFamily='karla'
            >
                <form style={{
                    display: 'flex',
                    flexFlow: 'column',
                    width: '70%',
                    gap: 20,
                }}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="res-date" style={labelStyle}>Choose date</label>
                    <input
                        type="date"
                        name="date"
                        id="res-date"
                        value={newdate}
                        onChange={handleDate}
                        onFocus={onTouched}
                    />
                    {touched && !newdate ? (
                        <p className="error" style={notificationStyle}>
                            Please choose booking date
                        </p>
                    ) : null}
                    <label htmlFor="time" style={labelStyle}>Choose time</label>
                    <select
                        name="time"
                        id="time"
                        value={time}
                        onChange={handleTime}
                        onFocus={onTouched}
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
                    {touched && !time ? (
                        <p className="error" style={notificationStyle}>
                            Please choose boking time
                        </p>
                    ) : null}
                    <label htmlFor="guests" style={labelStyle}>Number of guests</label>
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
                        <p className="error" style={notificationStyle}>
                            The number of guests should be at least 1 and no more than 10
                        </p>
                    ) : null}
                    <label htmlFor="occasion" style={labelStyle}>Occasion</label>
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
                        <p className="error" style={notificationStyle}>
                            Pelase choose occasion
                        </p>
                    ) : null}
                    <input type="submit"
                        value="Make Your Reservation"
                        aria-label='Make Your Reservation'
                        disabled={!isEnabled}
                    ></input>
                </form>
            </VStack>
        </Box>
    );

}
export default BookingForm;