import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation = styled.div`
    display: flex;
    width: 100%; 
    justify-content: space-between; 
`
const H1 = styled.h1`
    margin: 1rem 2rem; 
`
const ButtonsDiv = styled.div`
    display: flex;
    align-content: flex-end;
`
const Button = styled.button`
    font-size: large; 
    margin: 2.5rem .5rem 1.5rem 0;
    padding: 1rem; 
    background-color: black;
    color: white; 
`

const NavBar = () => {

    return(
        <>
        <Navigation>
            <H1>Lambda Eats <span role='img' aria-label='pizza slice emoji'>🍕</span></H1>
            <ButtonsDiv>
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/pizza"><Button>Order Your Pizza Here!</Button></Link>
            </ButtonsDiv>
        </Navigation>
        <hr></hr> {/* this is for deleting later */}
        
        </>
    )
}

export default NavBar