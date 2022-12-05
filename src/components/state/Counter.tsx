import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "inc" | "dec";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "inc":
      return { count: state.count + action.payload };
    case "dec":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "inc", payload: 1 });
        }}
      >
        inc 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec", payload: 1 });
        }}
      >
        dec 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </>
  );
};
