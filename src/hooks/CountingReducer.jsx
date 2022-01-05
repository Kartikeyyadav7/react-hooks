import React, { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };

		default:
			return state;
	}
};

const initialState = {
	count: 0,
};

const CountingReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const increment = () => {
		dispatch({ type: "increment" });
	};
	const decrement = () => {
		dispatch({ type: "decrement" });
	};
	return (
		<div>
			<button onClick={increment}>+</button>
			{state.count}
			<button onClick={decrement}>-</button>
		</div>
	);
};

export default CountingReducer;
