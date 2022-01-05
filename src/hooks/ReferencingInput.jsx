import React, { useRef, useEffect, useState } from "react";

function ReferencingInput() {
	const [count, setCount] = useState(0);

	const [user, setUser] = useState("");

	let renderedTime = useRef(1);

	let inputRef = useRef(null);

	const handleFocus = () => {
		inputRef.current.focus();
	};

	useEffect(() => {
		renderedTime.current += 1;
	});

	const handleCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h2>The count is {count} </h2>
			<button onClick={handleCount}>Increasing Count</button>
			<h3>
				The number of times the component rendered is {renderedTime.current}
			</h3>
			<input
				type="text"
				value={user}
				onChange={(e) => setUser(e.target.value)}
				ref={inputRef}
			/>
			<button onClick={handleFocus}>Focus</button>
		</div>
	);
}

export default ReferencingInput;
