import React, { Fragment, useState } from 'react';
import shortid from 'shortid';

const Formulario = ({crearCita}) => {
        // Crear state de citas
        const [cita, actualizarCita] = useState({
                mascota: '',
                propietario: '',
                fecha: '',
                hora: '',
                sintomas: ''
        });

        const [error, actualizarError] = useState(false);

        // Función que se activa cuando escribe en input
        const actualizarState = e => {
                actualizarCita({
                        ...cita,
                        [e.target.name]:e.target.value 
                })
        }

        // Extraer valores
        const { mascota, propietario, fecha, hora, sintomas } = cita;

        // Cuando usuario envía formulario
        const submitCita = (e) => {
                e.preventDefault();

                // Validar
                if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
                hora.trim() === '' || sintomas.trim() === '' ){
                        actualizarError(true);
                        return;
                }

                // Eliminar mensaje previo
                actualizarError(false);

                // Asignar un ID
                cita.id = shortid.generate();

                // Crear Cita
                crearCita(cita);

                // Reiniciar Form
                actualizarCita({
                        mascota: '',
                        propietario: '',
                        fecha: '',
                        hora: '',
                        sintomas: ''
                })
        }


        return ( 
                <Fragment>
                        <h2>Crear Cita</h2>

                        { error ? <p className="alerta-error">Todos los campos son obligatorios</p>
                        :null}

                        <form
                                onSubmit={submitCita}
                        >
                                <label>Nombre Mascota</label>
                                <input
                                        type="text"
                                        name="mascota"
                                        className="u-full-width"
                                        placeholder="nombre mascota"
                                        onChange={ actualizarState }
                                        value={mascota}
                                />
                                <label>Nombre Dueño</label>
                                <input
                                        type="text"
                                        name="propietario"
                                        className="u-full-width"
                                        placeholder="nombre propietario mascota"
                                        onChange={ actualizarState }
                                        value={propietario}
                                />

                                <label>Fecha</label>
                                <input
                                        type="date"
                                        name="fecha"
                                        className="u-full-width"
                                        onChange={ actualizarState }
                                        value={fecha}
                                />

                                <label>Hora</label>
                                <input
                                        type="time"
                                        name="hora"
                                        className="u-full-width"
                                        onChange={ actualizarState }
                                        value={hora}
                                />

                                <label>Síntomas</label>
                                <textarea
                                        className="u-full-width"
                                        name="sintomas"
                                        onChange={ actualizarState }
                                        value={sintomas}
                                ></textarea>
                                <button
                                        type="submit"
                                        className="u-full-width button-primary"
                                        onChange={ actualizarState }
                                >Agregar Cita</button>
                        </form>
                </Fragment>
         );
}
 
export default Formulario;