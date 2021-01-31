import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const bookMeetingRoom = createAsyncThunk(
    "booking/bookMeetingRoom",
    async (undefined, thunkAPI) => {
        const newBookingId = String(thunkAPI.getState().length + 1);
        return newBookingId;
    }
);

const bookingSlice = createSlice({
    name: "booking",
    initialState: [],
    reducers: {
        bookingData: (state, action) => {
            const { id, room, name, desc, date, time } = action.payload;
            let booking = state.find((booking) => booking.id == id);
            console.log(state);
            
            booking.bookingInfo = {
                room,
                name,
                desc,
                date,
                time
            }
        },
        confirmBooking: (state, action) => {
            
        }
    },
    extraReducers: {
        [bookMeetingRoom.fulfilled]: (state, action) => {
            state.push({
                id: action.payload,
                isBooked: false,
                bookingInfo: {}
            });
        }
    }
});

export { bookMeetingRoom, bookingSlice };