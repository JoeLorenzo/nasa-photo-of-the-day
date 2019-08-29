import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Alert} from 'reactstrap';
import styled from "styled-components"

const PTag = styled.p`
font-size: 1 rem;
`

function NasaCards(props){
  console.log(props)
  return (
      <div>
      <Jumbotron>
      <h4> {props.title} </h4>
      <h4> {props.date} </h4>
      <img src={props.url} alt="" />
      <PTag> {props.explanation} </PTag>
      </Jumbotron>
      </div>

  )
}


export default NasaCards
