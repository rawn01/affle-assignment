import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { bookMeetingRoom } from "./store/bookingSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import './App.css';

function App() {
    const history = useHistory();
    const dispatch = useDispatch();

    const bookRoom = () => {
        dispatch(bookMeetingRoom())
        .then(unwrapResult)
        .then((id) => history.push("/book/" + id))
    };

    return (
        <div className="app">
            <button className="btn" onClick={bookRoom}>Book</button>
        </div>
    );
}

export default App;
