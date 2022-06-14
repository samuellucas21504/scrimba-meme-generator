import React, { useState, useEffect } from "react";
import "./styles.css";
import Meme from "./Meme";

export default function Form() {
	const [allMemesImage, setAllMemesImage] = useState();
	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemesImage(data));
	}, []);
	const [memeImage, setMemeImage] = useState({
		topText: "",
		bottomText: "",
		url: "http://i.imgflip.com/1bij.jpg",
	});

	function getRandomURL() {
		const memesArray = allMemesImage.data.memes;
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const randomMemeURL = memesArray[randomIndex].url;
		return randomMemeURL;
	}

	function handleOnClick() {
		setMemeImage((prevMeme) => ({
			...prevMeme,
			url: getRandomURL(),
		}));
	}

	function handleOnChange(e) {
		const { name, value } = e.target;
		setMemeImage((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<div className="form">
			<div className="form--top_wrapper">
				<div className="form--input_wrapper">
					<input
						type="text"
						className="form--input"
						placeholder="Top text"
						name="topText"
						value={memeImage.topText}
						onChange={handleOnChange}
					/>
					<input
						type="text"
						className="form--input"
						placeholder="Bottom text"
						name="bottomText"
						value={memeImage.bottomText}
						onChange={handleOnChange}
					/>
				</div>
				<button className="form--submit" onClick={handleOnClick}>
					Get a new meme image
				</button>
			</div>
			<Meme {...memeImage} />
		</div>
	);
}
