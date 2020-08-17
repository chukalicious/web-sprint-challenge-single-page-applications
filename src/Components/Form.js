import React, { useEffect, useState} from 'react'
import styled from "styled-components"
import * as yup from 'yup'
import axios from 'axios'

const Form = () => {

    //form initial state
    const [orderState, setOrderState] = useState({
        customerName: '',
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
        artichoke: false,
        cheese: false,
        pineapple: false,
        extraCheese: false,
        instructions: '',
        quantity: ''
    })

    //errors state
    const [errors, setErrors] = useState({
        customerName: '',
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
        artichoke: '',
        cheese: '',
        pineapple: '',
        extraCheese: '',
        instructions: '',
        quantity: ''
    })

    //form schema
    const orderSchema = yup.object().shape({
        customerName: yup.string().min(2, "Enter at least 2 characters for your name").required("Please provide your name"),
        size: yup.string().oneOf(["Personal", "Medium", "Large", "X-Large"], 'Please select a size'),
        sauce: yup.string().oneOf(['original', 'garlic', 'BBQ', 'alfredo'])/* required('Please choose a sauce'), */,
        pepperoni: yup.string().notRequired(),
        sausage: yup.string().notRequired(),
        bacon: yup.string().notRequired(),
        italian: yup.string().notRequired(),
        chicken: yup.string().notRequired(),
        onions: yup.string().notRequired(),
        pepper: yup.string().notRequired(),
        tomatoes: yup.string().notRequired(),
        olives: yup.string().notRequired(),
        roastedGarlic: yup.string().notRequired(),
        artichoke: yup.string().notRequired(),
        cheese: yup.string().notRequired(),
        pineapple: yup.string().notRequired(),
        extraCheese: yup.string().notRequired(),
        instructions: yup.string().notRequired(),
        quantity: yup.string().oneOf(['1', '2', '3', '4'], 'Please select how many pizzas you want')
    })

    //submit button state
    const [disabledButton, setDisabledButton] = useState(true)

    //new order state
    const [ordered, setOrdered] = useState([])

    //enable submit button if form is valid
    useEffect(() => {
        orderSchema.isValid(orderState)
        .then((valid) => {
            console.log("is valid?", valid)
            setDisabledButton(!valid)

        })
    }, [orderState, orderSchema])

    //validate order, check if it meets schema's criteria
    const validateOrder = (e) => {
        yup.reach(orderSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
            setErrors({
                ...errors,
                [e.target.name]: ''
            })
        })
        .catch((err) => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            })
        })
    }

    //listen for input changes 
    const inputChange = (e) => {
        e.persist()
        e.target.type === 'checkbox' ? console.log(e.target.name) : console.log(e.target.value)
        const newOrder = {
            ...orderState,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }
        validateOrder(e)
        setOrderState(newOrder)
    }

    //Submit order
    const orderSubmit = (e) => {
        e.preventDefault()
        axios.post('https://reqres.in/api/users', orderState)
        .then((res) => {
            console.log(res.data)
            setOrdered(res.data)
            setOrderState({
                customerName: '',
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
                artichoke: false,
                cheese: false,
                pineapple: false,
                extraCheese: false,
                instructions: '',
                quantity: ''
            })
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Build your own Pizza</h2>
            <form onSubmit={orderSubmit}>
                <label htmlFor='customerName'>
                    Your Name:
                    <input type="text" name="customerName" id="customerName" value={orderState.customerName} onChange={inputChange}/>
                </label>
                <br />
                <label htmlFor='size'>
                Choice of Size:  
                <select name="size" id="size" onChange={inputChange} value={orderState.size}>
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
                <input type="radio" name="sauce" id="original" value="original" onChange={inputChange}/> 
                Original Red
                </label>
                <br/>
                <label htmlFor="garlic">
                <input type="radio" name="sauce" id="garlic" value="garlic" onChange={inputChange} /> 
                Garlic Ranch
                </label>
                <br/>
                <label htmlFor="BBQ">
                <input type="radio" name="sauce" id="BBQ" value="BBQ" onChange={inputChange} /> 
                BBQ Sauce
                </label>
                <br/>
                <label htmlFor="alfredo">
                <input type="radio" name="sauce" id="alfredo" value="alfredo" onChange={inputChange} /> 
                Spinach Alfredo
                </label>
                <br/>
                Add Toppings:<br />
                Add up to 10<br />
                <label htmlFor="pepperoni">
                    <input type="checkbox" name="pepperoni" id="pepperoni" onChange={inputChange} checked={orderState.pepperoni} />
                    Pepperoni
                </label>
                <br /> 
                <label htmlFor="sausage">
                    <input type="checkbox" name="sausage" id="sausage" onChange={inputChange} checked={orderState.sausage} />
                    Sausage
                </label>
                <br /> 
                <label htmlFor="bacon">
                    <input type="checkbox" name="bacon" id="bacon" onChange={inputChange} />
                    Canadian Bacon
                </label>
                <br /> 
                <label htmlFor="italian">
                    <input type="checkbox" name="italian" id="italian" onChange={inputChange} checked={orderState.italian} />
                    Spicy Italian Sausage
                </label>
                <br /> 
                <label htmlFor="chicken">
                    <input type="checkbox" name="chicken" id="chicken" onChange={inputChange} checked={orderState.chicken} />
                    Grilled Chicken
                </label>
                <br /> 
                <label htmlFor="onions">
                    <input type="checkbox" name="onions" id="onions" onChange={inputChange} checked={orderState.onions} />
                    Onions
                </label>
                <br /> 
                <label htmlFor="pepper">
                    <input type="checkbox" name="pepper" id="pepper" onChange={inputChange} checked={orderState.pepper} />
                    Green Pepper
                </label>
                <br /> 
                <label htmlFor="tomatoes">
                    <input type="checkbox" name="tomatoes" id="tomatoes" onChange={inputChange} checked={orderState.tomatoes} />
                    Diced Tomatoes
                </label>
                <br /> 
                <label htmlFor="olives">
                    <input type="checkbox" name="olives" id="olives" onChange={inputChange} checked={orderState.olives} />
                    Black Olives
                </label>
                <br /> 
                <label htmlFor="roastedGarlic">
                    <input type="checkbox" name="roastedGarlic" id="roastedGarlic" onChange={inputChange} checked={orderState.roastedGarlic}/>
                    Roasted Garlic
                </label>
                <br /> 
                <label htmlFor="artichoke">
                    <input type="checkbox" name="artichoke" id="artichoke" onChange={inputChange} checked={orderState.artichoke} />
                    Artichoke Hearts
                </label>
                <br /> 
                <label htmlFor="cheese">
                    <input type="checkbox" name="cheese" id="cheese" onChange={inputChange} checked={orderState.cheese}/>
                    Three Cheese
                </label>
                <br /> 
                <label htmlFor="pineapple">
                    <input type="checkbox" name="pineapple" id="pineapple" onChange={inputChange} checked={orderState.pineapple} />
                    Pineapple
                </label>
                <br />  
                <label htmlFor="extraCheese">
                    <input type="checkbox" name="extraCheese" id="extraCheese" onChange={inputChange} checked={orderState.extraCheese} />
                    Extra Cheese
                </label>
                <br /> 
                {/* gluten option would go here */}
                <label htmlFor='instructions'>
                    Special Instructions: <br /> 
                    <textarea placeholder="Anything else you'd like to add?" name="instructions" id="instructions" onChange={inputChange} value={orderState.instructions}/>
                </label>
                <br /> 
                <label htmlFor='quantity'>
                    <select id="quantity" name="quantity" onChange={inputChange} value={orderState.quantity}>
                        <option>Select Quantity</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </label>
                <br /> 
                <button >Add to Order</button>

                <pre>{JSON.stringify(ordered, null, 2)}</pre>




            </form>
        </div>
        
    )
}

export default Form