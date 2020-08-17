import React, { useEffect, useState} from 'react'
import styled from "styled-components"




const Form = () => {

    //form initial state
    const [order, setOrder] = useState({
        size: '',
        sauce: '',
        pepperoni: false,
        sausage: false,
        bacon: false,
        italian: false,
        chicken: false,
        onions: false,
        pepper: false,
        tomatoes: false,
        olives: false,
        roastedGarlic: false,
        artichocke: false,
        cheese: false,
        pineapple: false,
        extraCheese: false,
        instructions: '',
        quantity: ''
    })

    //errors state
    const [errors, setErrors] = useState({
        size: '',
        sauce: '',
        pepperoni: '',
        sausage: '',
        bacon: '',
        italian: '',
        chicken: '',
        onions: '',
        pepper: '',
        tomatoes: '',
        olives: '',
        roastedGarlic: '',
        artichocke: '',
        cheese: '',
        pineapple: '',
        extraCheese: '',
        instructions: '',
        quantity: ''
    })

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
                Add Toppings:<br />
                Add up to 10<br />
                <label htmlFor="pepperoni">
                    <input type="checkbox" name="pepperoni" id="pepperoni" />
                    Pepperoni
                </label>
                <br /> 
                <label htmlFor="sausage">
                    <input type="checkbox" name="sausage" id="sausage" />
                    Sausage
                </label>
                <br /> 
                <label htmlFor="bacon">
                    <input type="checkbox" name="bacon" id="bacon" />
                    Canadian Bacon
                </label>
                <br /> 
                <label htmlFor="italian">
                    <input type="checkbox" name="italian" id="italian" />
                    Spicy Italian Sausage
                </label>
                <br /> 
                <label htmlFor="chicken">
                    <input type="checkbox" name="chicken" id="chicken" />
                    Grilled Chicken
                </label>
                <br /> 
                <label htmlFor="onions">
                    <input type="checkbox" name="onions" id="onions" />
                    Onions
                </label>
                <br /> 
                <label htmlFor="pepper">
                    <input type="checkbox" name="pepper" id="pepper" />
                    Green Pepper
                </label>
                <br /> 
                <label htmlFor="tomatoes">
                    <input type="checkbox" name="tomatoes" id="tomatoes" />
                    Diced Tomatoes
                </label>
                <br /> 
                <label htmlFor="olives">
                    <input type="checkbox" name="olives" id="olives" />
                    Black Olives
                </label>
                <br /> 
                <label htmlFor="roastedGarlic">
                    <input type="checkbox" name="roastedGarlic" id="roastedGarlic" />
                    Roasted Garlic
                </label>
                <br /> 
                <label htmlFor="artichoke">
                    <input type="checkbox" name="artichoke" id="artichoke" />
                    Artichoke Hearts
                </label>
                <br /> 
                <label htmlFor="cheese">
                    <input type="checkbox" name="cheese" id="cheese" />
                    Three Cheese
                </label>
                <br /> 
                <label htmlFor="pineapple">
                    <input type="checkbox" name="pineapple" id="pineapple" />
                    Pineapple
                </label>
                <br />  
                <label htmlFor="extraCheese">
                    <input type="checkbox" name="extraCheese" id="extraCheese" />
                    Extra Cheese
                </label>
                <br /> 
                {/* gluyten free would go here */}
                <label htmlFor='instructions'>
                    Special Instructions: <br /> 
                    <textarea placeholder="Anything else you'd like to add?" name="instructions" id="instructions" />
                </label>
                <br /> 
                <label htmlFor='quantity'>
                    <select id="quantity" name="quantity">
                        <option>Select Quantity</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </label>
                <br /> 
                <button>Add to Order</button>




            </form>
        </div>
        
    )
}

export default Form