import React from "react";
import "./styles.css";

export default function Form() {
    return (
        <div className="form">
            <div className="form--top_wrapper">
                <div className="form--input_wrapper">
                    <input type="text" className="form--input" placeholder="Top text" />
                    <input type="text" className="form--input" placeholder="Bottom text" />
                </div>
                <button className="form--submit">Get a new meme image</button>
            </div>
        </div>
    )
}