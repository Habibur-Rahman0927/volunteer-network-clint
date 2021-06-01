import React, { useEffect, useState } from 'react';
import Event from '../About/Event';


const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://stormy-fjord-03288.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className="row">
            {
                events.map((event, key) => <Event key={key} event={event}></Event>)
            }
        </div>
    );
};

export default Home;