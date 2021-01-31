import { configureStore } from "@reduxjs/toolkit";
import { bookingSlice } from "../store/bookingSlice";

const store = configureStore(bookingSlice);

export default store;