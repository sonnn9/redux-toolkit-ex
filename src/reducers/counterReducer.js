// src/reducers/counterReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from '../actions/counterActions';

const initialState = 0;

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      return state + 1;
    })
    .addCase(decrement, (state, action) => {
      return state - 1;
    });
});

export default counterReducer;
