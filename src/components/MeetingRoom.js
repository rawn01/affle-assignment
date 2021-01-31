import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";

import { bookingSlice } from "../store/bookingSlice";
import '../styles/MeetingRoom.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const MeetingRoom = () => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    // Page 1
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    // Page 2
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(undefined);

    const availableTime = [
        "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "1:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
        "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"
    ];

    const changePage = () => {
        if(page === 1) {
            setPage(2);
        } else {
            setPage(1);
        }
    };

    const logout = () => {
        history.push("/");
    }

    const confirm = () => {
        const theDate = moment(date).format("dddd, Do MMMM");
        const data = {
            id: id,
            room,
            name,
            desc,
            date: theDate,
            time
        };

        dispatch(bookingSlice.actions.bookingData(data));
        history.push("/confirm/" + id, data);
    }

    return (
        <div className="container">
            <div className="header">
                <button onClick={logout}>Logout</button>
            </div>

            <div className="booking-wrapper">
                { page === 1 ? 
                    <PageOne setPage={changePage} 
                        room={room} setRoom={setRoom} 
                        name={name} setName={setName}
                        desc={desc} setDesc={setDesc}
                    />
                    : 
                    <PageTwo setPage={changePage}
                        date={date} setDate={setDate}
                        time={time} setTime={setTime}
                        confirmBooking={confirm}
                        times={availableTime}
                    /> 
                }
            </div>
        </div>
    );
}

export default MeetingRoom;
