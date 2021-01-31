import React from "react";
import moment from "moment";
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import '../styles/PageTwo.css';

const PageTwo = (props) => {
    return (
        <div className="booking-container">
            <div className="booking-calendar">
                <Calendar onChange={props.setDate} value={props.date} />
                <p>{moment(props.date).format("dddd, Do MMMM")}</p>
            </div>

            <div className="booking-time">
                <h3>Please select your preferred slot</h3>
                <div className="time-grid">
                    {props.times.map((time, idx) => {
                        return (
                            <div key={idx} className="time" onClick={() => props.setTime(time)}>
                                <input id={`time${idx}`} type="radio" name="time" key={idx} />
                                <label htmlFor={`time${idx}`} className="time-button">{time}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="book-buttons">
                <button className="btn" onClick={props.setPage}>Previous</button>
                <button className="btn" onClick={props.confirmBooking}>Book</button>
            </div>
        </div>
    );
};

export default PageTwo;