import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./components/App";

// CSS
import "./predefined.css";
import "./reset.css";
import "./index.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
