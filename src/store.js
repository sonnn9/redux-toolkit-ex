import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import messageReducer from "./reducers/messageReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        message: messageReducer
    }
});

export default store;