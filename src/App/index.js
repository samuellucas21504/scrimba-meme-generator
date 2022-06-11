import React from "react";
import "./styles.css";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Form />
            <Footer />
        </div>
    )
}