import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <Card />
    </div>

  )
}