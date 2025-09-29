import React, { useReducer } from 'react'
// import './Count.css'

const initialState = 0;



const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reinitialiser':
            return initialState
        
        default: 
            return state
    }
}

function CountReducer() {

    // state = état initial, dispatch = action qu'on lui donnera
    // const [state, dispatch] = useReducer(reducer, {count: 0})
    const [count, dispatch] = useReducer(reducer, initialState)

    // useReducer(reducer, initialState)

    return (

        <div>
             <h1>Compteur : {count}</h1>
             <button className="btn btn-success m-3" onClick={() => dispatch('increment')}>+</button>
             <button className="btn btn-danger m-3" onClick={() => dispatch('decrement')}>-</button>
             <button className="btn btn-danger m-3" onClick={() => dispatch('reinitialiser')}>x</button>
         </div>
    )
}

// const Count = ({count, bgColor}) => {
//     const progress = {width: `${count} %`};

//     // return (
//     //     <>
//     //         {/* <p className="h1">
//     //             {count} %
//     //         </p>

        <div className="progress">
            <div className="progress-bar w-full bg-gray-300 rounded-full h-4 overflow-hidden ">
            </div>
            <progress></progress>
        </div>


export default CountReducer

