import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./Static/Home";
import Menu from "./Static/Menu";
import Delivery from "./Static/Delivery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Phase 5 - Capstone Project</h1>
      </header>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/delivery" element={<Delivery />} />
      </Routes>
      <img
        src={
          "https://img.freepik.com/premium-vector/mexico-traditional-food-tacos-vector-design-illustration_605910-13.jpg?w=2000"
        }
        alt="taco"
        height="300px"
      />
    </div>
  );
}

export default App;
