import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/ComponenteB';



const ComponenteA = () => {

    const Contacto1 = new Contacto('Julio', 'Diaz', 'juliocdiaznieto@gmail.com', false);
    
    return (
        <div>
            <div>
                <h1>Datos de Contacto:</h1> 
            </div>
            {/*TODO: Aplicar un For/Map para renderizar una lista */}
            <ComponenteB contacto={Contacto1}></ComponenteB>
        </div>
    );
};



export default ComponenteA;
