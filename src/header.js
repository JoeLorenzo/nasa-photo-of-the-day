import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Alert} from 'reactstrap';
import styled from "styled-components"

const HeaderContainer = styled.div`
background: #ccf2ff ;
font-size: 4rem;
margin: 0;
`

function Header(){
  return(
    <HeaderContainer>
      <h2>NASA Photo of the Day</h2>
    </HeaderContainer>
  )
}


export default Header
