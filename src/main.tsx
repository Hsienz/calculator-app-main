import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DisplayProvider from "./context/DisplayContext";
import ThemeProvider, { useTheme } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<DisplayProvider>
				<App />
			</DisplayProvider>
		</ThemeProvider>
	</React.StrictMode>
);
