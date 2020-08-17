import React, { useEffect, useState} from 'react'
import styled from "styled-components"



const Form = () => {

    return (
        <div>
            <h2>Build your own Pizza</h2>
            <form>
                <label htmlFor='size'>
                Choice of Size:  
                <select name="size" id="size">
                
                    <option>Please select a size:</option>
                    <option value="personal">Personal</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="x-large">X-Large</option>
                </select>
                </label>
                <br /> 
                Choice of Sauce: 
                <br /> 
                <label htmlFor="original">
                <input type="radio" name="sauce" id="original" /> 
                Original Red
                </label>
                <br/>
                <label htmlFor="garlic">
                <input type="radio" name="sauce" id="garlic" /> 
                Garlic Ranch
                </label>
                <br/>
                <label htmlFor="BBQ">
                <input type="radio" name="sauce" id="BBQ" /> 
                BBQ Sauce
                </label>
                <br/>
                <label htmlFor="alfredo">
                <input type="radio" name="sauce" id="alfredo"/> 
                Spinach Alfredo
                </label>
                <br/>


            </form>
        </div>
        
    )
}

export default Form