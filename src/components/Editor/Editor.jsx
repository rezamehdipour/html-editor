// Libraries
import { Controlled as ControlledEditor } from "react-codemirror2";

// CSS
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "./Editor.scss";

const Editor = ({ name, language, value, onChange }) => {
	const handleChange = (editor, data, value) => {
		onChange(value);
	};

	return (
		<div className="editor">
			<div className="head">
				<h6>{name}</h6>
			</div>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					theme: "material",
					lineNumbers: true,
				}}
			/>
		</div>
	);
};

export default Editor;
