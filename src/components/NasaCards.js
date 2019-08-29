import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Alert} from 'reactstrap';
import styled from "styled-components"

const H2Tag = styled.h2`
background: green;
color: blue;
`

function NasaCards(props){
  console.log(props)
  console.log(H2Tag)
  return (
      <div>
      <Jumbotron>
      <h3> {props.title} </h3>
      <h3> {props.date} </h3>
      <img src={props.url} alt="" />
      <p> {props.explanation} </p>
      </Jumbotron>
      </div>

  )
}


export default NasaCards
