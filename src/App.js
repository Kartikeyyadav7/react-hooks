import "./App.css";
import ReferencingInput from "./hooks/ReferencingInput";
// import CountingReducer from "./hooks/CountingReducer";
import { ThemeProvider } from "./hooks/ThemeContext";
import ThemeChanger from "./ThemeChanger";

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<h2>Hello </h2>
				<ThemeChanger />
				<ReferencingInput />
			</div>
		</ThemeProvider>
	);
}

export default App;
