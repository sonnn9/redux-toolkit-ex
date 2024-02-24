// src/reducers/messageReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { setMessage } from '../actions/messageActions';

const initialState = '';

const messageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setMessage, (state, action) => {
      return action.payload;
    });
});

export default messageReducer;
