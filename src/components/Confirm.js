import React from "react";
import { useLocation } from "react-router-dom";
import ApiCalendar from 'react-google-calendar-api';

import '../styles/Confirm.css';

const Confirm = () => {
    const location = useLocation();
    const data = location.state;

    const handleItemClick = (e, name) => {
        if (name === 'sign-in') {
          ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
          ApiCalendar.handleSignoutClick();
        }
      };

    return (
        <div id="dark">
            <div className="submit">
                <div className="table">
                    <div className="tr">
                        <div className="td"><b>Room: </b></div>
                        <div className="td">{location.state.name}</div>
                    </div>

                    <div className="tr">
                        <div className="td"><b>Name: </b></div>
                        <div className="td">{location.state.room}</div>
                    </div>

                    <div className="tr">
                        <div className="td"><b>Description: </b></div>
                        <div className="td">{location.state.desc}</div>
                    </div>

                    <div className="tr">
                        <div className="td"><b>Date: </b></div>
                        <div className="td">{location.state.date}</div>
                    </div>

                    <div className="tr">
                        <div className="td"><b>Time: </b></div>
                        <div className="td">{location.state.time}</div>
                    </div>
                </div>

                <button className="btn" onClick={(e) => handleItemClick(e, "sign-in")}>Confirm</button>
            </div>
        </div>
    );
}

export default Confirm;