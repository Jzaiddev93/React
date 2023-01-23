/**
 * Ejemplo de uso del método componenteWillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        )
    }
}


export const WillunmountHook = () => {

    useEffect(() => {
        // aqui no podemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    );
}
