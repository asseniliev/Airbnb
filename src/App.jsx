import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data.js";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  const cards = data.map(card => {
    return (
      <Card
        {...card}
      />
    );
  })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}