import React, { useState } from 'react';

// Definiendo estilos en contantes:

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
};

// ? Estilo para usuario logueado
const unloggedStyle = {
    color: 'tomato'
};

const GreetingStyled = () => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no logueado
    const [logged, setlogged] = useState(false)

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>Please login</p>)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            { logged ? 
            greetingUser
            :
            pleaseLogin
            }
            <button onClick={() => {
                console.log('Botón pulsado')
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}



export default GreetingStyled;
