import React, { useEffect, useState } from 'react'


export const FunClock = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Julio',
        apellidos: 'Díaz',
    };

    const [state, updateState] = useState(initialState);

    
useEffect(() => {
console.log("useEffect: inicio");
const interval = setInterval(() => {
    updateState({
        ...state,
        fecha: new Date(),
        edad: state.edad + 1
    })
    console.log("setInterval: inicio");
}, 1000);

    return () => clearInterval(interval)
    
}, [state])


    return (
        <div>
            <h2>
                Hora Actual: {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )
}