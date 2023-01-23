/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con userRef() para asociar una variable
    // con un elemento del DOM del componenete (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1);
    }
    function incrementar2(){
        setContador2(contador2 +1);
    }

    /**
     * Trabajando con UseEffect
     */

     /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    /* useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando Referencia a elementos del DOM:');
        console.log(miRef);
    }) */

    /**
     * ? Caso 2: Ejecutar SOLO CAMBIE CONTADOR 1 o CONTADOR 2
     * Cada vez que haya un cambio en contador 1, se ejecita lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecita lo que diga el useEffect()
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando Referencia a elementos del DOM:');
        console.log(miRef);
    }, [contador1, contador2]);



    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 1: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;


