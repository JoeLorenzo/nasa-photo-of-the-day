import React from "react"

function NasaCards(props){
  console.log(props)
  return (
    <div>
      <h2> {props.title} </h2>
      <h3> {props.date} </h3>
      <img src={props.url} />
      <p> {props.explanation} </p>
    </div>

  )
}


export default NasaCards
