// src/components/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import { setMessage } from './actions/messageActions';

function App() {
  const counter = useSelector(state => state.counter);
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeMessage = (newMessage) => {
    dispatch(setMessage(newMessage));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input type="text" value={message} onChange={(e) => handleChangeMessage(e.target.value)} />
      <p>{message}</p>
    </div>
  );
}

export default App;
