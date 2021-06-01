import React from 'react';

const Event = (props) => {
    const {name, imageUrl, id} = props.event;
    // const imageAll = require(`../../images/${event.image}`);
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={imageUrl} alt="" />
            <h3>{name}</h3>
            {/* <button onClick={() => deleteEvent(id)}>Delete</button> */}

        </div>
    );
};

export default Event;