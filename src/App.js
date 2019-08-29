import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"
import "./App.css";
import axios from "axios"
import NasaCards from "./components/NasaCards.js"

function App() {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [explanation, setExplanation] = useState("")
  const [date, setDate] = useState("")
  console.log("top")
  useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
  .then(res => {
    console.log(res.data)
    console.log('bottom')
    setTitle(res.data.title)
    setExplanation(res.data.explanation)
    setUrl(res.data.url)
    setDate(res.data.date)
  })
}, [])
  return (
    <div className="App">
      <p>
        <NasaCards
          date={date}
          title={title}
          url={url}
          explanation={explanation}
          />
      </p>
    </div>
  );
}

export default App;
