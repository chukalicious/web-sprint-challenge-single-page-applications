import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'

const NavBar = () => {


    return(
        <div>
            <nav>
                <h1>Lambda Eats</h1>
                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/pizza"><button>Order <span role='img'>🍕</span> Here!</button></Link>
                </div>
            </nav>
            <hr></hr> {/* this is for deleting later */}
        
        </div>
    )
}

export default NavBar