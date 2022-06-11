import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Form />
        </div>
    )
}