import React from "react";
import "./App.css";
import axios from "axios"
import NasaCards from "./components/NasaCards.js"

function App() {
  return (
    <div className="App">
      <p>
        <NasaCards />
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
