import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Link to="/">HomePage</Link>
                <Link to="/about">AboutPage</Link>
                <Link to="/contact">ContactPage</Link>
            </BrowserRouter>
        </>
    )
}

function Home() {
    return (
        <h1>Home page</h1>
    )
}

function Contact() {
    return (
        <h1>Contact page</h1>
    )
} function About() {
    return (
        <h1>About page</h1>
    )
}