import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Contacto } from '../../models/contacto.class'

const ComponenteB = ({ contacto }) => {

      const [conectado, setConnect] = useState(contacto.conectado);

      const cambiarEstado = () => {
            contacto.conectado = !contacto.conectado
            setConnect(contacto.conectado)
}

return (
      <div>
            <h2>
                  Nombre: { contacto.nombre }
            </h2>
            <h3>
                  Apellido: { contacto.apellido }
            </h3>
            <h4>
                  Correo: { contacto.correo }
            </h4>
            <h5>
                  Estado: { conectado ? 'Contacto en Línea':'Contacto No Disponible'}
            </h5>
            <button onClick={cambiarEstado}>Cambiar estado</button>
      </div>
      );

      
};

ComponenteB.propTypes = {
      contacto: PropTypes.instanceOf(Contacto),
      nombre: PropTypes.string,
      apellido: PropTypes.string,
      correo: PropTypes.string,
      conectado: PropTypes.bool
};

export default ComponenteB;