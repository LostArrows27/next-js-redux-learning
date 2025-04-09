"use client";

import { decrement, increment } from "@/app/stores/state/counter_state";
import { AppDispatch, RootState } from "@/app/stores/store/counter_store";
import { useDispatch, useSelector } from "react-redux";

const BetterCounter = () => {
  const count = useSelector((state: RootState) => state.value);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Better Counter</h1>
      <br />
      <p>This is a better counter component.</p>
      <p>It has a lot of features.</p>
      <p>It is very useful.</p>
      <p>It is very easy to use.</p>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default BetterCounter;
