import React from "react";
import '../styles/PageOne.css';

const PageOne = (props) => {
    return (
        <div className="booking-container">
            <h2>Meeting Room Booking</h2>

            <div className="booking-form">
                <div>
                    
                </div>

                <div>
                    <label htmlFor="room">Meeting room</label>
                    <input id="room" value={props.room} onChange={(e) => props.setRoom(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={props.name} onChange={(e) => props.setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="desc">Meeting description</label>
                    <input id="desc" value={props.desc} onChange={(e) => props.setDesc(e.target.value)} />
                </div>

                <div>
                    <button className="btn" onClick={props.setPage}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default PageOne;