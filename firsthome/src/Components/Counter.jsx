import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter Value: {counterValue}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
