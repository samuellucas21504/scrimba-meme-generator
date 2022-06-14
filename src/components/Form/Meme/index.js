import React from "react";
import "./styles.css";

export default function Meme(props) {
	return (
		<div className="meme">
			<img src={props.url} alt="meme" />
			<h2 className="meme--text top">{props.topText}</h2>
			<h2 className="meme--text bottom">{props.bottomText}</h2>
		</div>
	);
}
