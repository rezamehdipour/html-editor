import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Components
import Editor from "./Editor/Editor";

// CSS
import "./App.scss";

const App = (props) => {
	const [html, setHtml] = useLocalStorage("html", "");
	const [css, setCss] = useLocalStorage("css", "");
	const [javascript, setJavascript] = useLocalStorage("js", "");
	const [srcDoc, setSrcDoc] = useState("");

	useEffect(() => {
		const codePreviewDelay = setTimeout(() => {
			setSrcDoc(`
				<html>
				<body>${html}</body>
				<style>${css}</style>
				<script>${javascript}</script>
				</html>
			`);
		}, 350);

		return () => clearTimeout(codePreviewDelay);
	}, [html, css, javascript]);

	return (
		<div className="playground">
			<div className="editors">
				<Editor name="HTML" language="xml" value={html} onChange={setHtml} />
				<Editor name="CSS" language="css" value={css} onChange={setCss} />
				<Editor name="JS" language="javascript" value={javascript} onChange={setJavascript} />
			</div>
			<div className="seperator"></div>
			<div className="preview">
				<iframe
					srcDoc={srcDoc}
					title="output"
					sandbox="allow-scripts"
					frameBorder="0"
					width="100%"
					height="100%"
				/>
			</div>
		</div>
	);
};

export default App;
