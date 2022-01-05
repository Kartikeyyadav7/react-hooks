import React, { useContext } from "react";
import { ThemeContext } from "./hooks/ThemeContext";

function ThemeChanger() {
	const [darkTheme, toggleTheme] = useContext(ThemeContext);

	const themeStyles = {
		background: darkTheme ? "#333" : "#ccc",
		color: darkTheme ? "#ccc" : "#333",
		margin: `2rem`,
		padding: `2rem`,
	};

	return (
		<div style={themeStyles}>
			Normal Component who needs access to the things that are universal
			<button onClick={toggleTheme}>Change theme</button>
		</div>
	);
}

export default ThemeChanger;
