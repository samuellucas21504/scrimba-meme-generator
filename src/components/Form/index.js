import React, { useState } from "react";
import "./styles.css";
import memesData from "../../mockups/memesData";
import Meme from "./Meme";

export default function Form() {

    const [allMemesImage, setAllMemesImage] = useState(memesData);
    const [memeImage, setMemeImage] = useState(
        {
            topText: "",
            bottomText: "",
            url: getRandomURL()
        });

    function getRandomURL() {
        const memesArray = allMemesImage.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const randomMemeURL = memesArray[randomIndex].url;
        return randomMemeURL;
    }

    function handleOnClick() {
        setMemeImage(prevMeme => ({
            ...prevMeme,
            url: getRandomURL()
        }))
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
            <Meme {...memeImage} />
        </div>
    )
}