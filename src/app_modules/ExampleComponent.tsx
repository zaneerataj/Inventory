// ExampleComponent.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './redux_store/store';
import { decrement, increment } from './redux_store/features/counterSlice';
import { Button } from '../../components/ui/button';

const ExampleComponent: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default ExampleComponent;
