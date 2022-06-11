import React, { useState } from "react";
import "./styles.css";
import memesData from "../../mockups/memesData";
import Meme from "./Meme";

export default function Form() {

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)];
        return <Meme {...randomMeme} />;
    }

    const [meme, setMeme] = useState(getMemeImage);

    function handleOnClick() {
        setMeme(getMemeImage);
    }

    return (
        <div className="form">
            <div className="form--top_wrapper">
                <div className="form--input_wrapper">
                    <input type="text" className="form--input" placeholder="Top text" />
                    <input type="text" className="form--input" placeholder="Bottom text" />
                </div>
                <button className="form--submit" onClick={handleOnClick}>Get a new meme image</button>
            </div>
            {meme}
        </div>
    )
}