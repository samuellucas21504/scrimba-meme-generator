import React from "react";
import "./styles.css";

export default function Meme(props) {

    return (
        <div className="meme">
            <img
                src={props.url}
                alt="meme-image"
            />
        </div>
    )
}