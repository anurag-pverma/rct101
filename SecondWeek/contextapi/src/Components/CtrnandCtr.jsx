// import React from 'react'
import React, { useReducer } from 'react'

const reducer = (state, {type, payload})=>{
    switch(type){
        case "INCREMENT": {
            return state + payload;
        }

        case "DECREMENT": {
            return state - payload;
        }
        default :{
            return state;
        }
    }
}
// need a state variable with inital value is = 0
// need a single place where this state changes can be monitored
export default function CtrnandCtr() {

    const [counter, dispatch]= useReducer(reducer, 0)
  return (
    <div>

    <h1>Counter : {counter}</h1>
    <button onClick={()=> dispatch({type:"DECREMENT", payload: 1})}>-</button>
    <button onClick={()=> dispatch({type:"INCREMENT", payload:1})}>+</button>

    </div>
  )
}
