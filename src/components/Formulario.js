import React, { Fragment } from 'react';

const Formulario = () => {
        return ( 
                <Fragment>
                        <h2>Crear Cita</h2>

                        <form>
                                <label>Nombre Mascota</label>
                                <input
                                        type="text"
                                        name="mascota"
                                        className="u-full-width"
                                        placeholder="nombre mascota"
                                />
                                <label>Nombre Dueño</label>
                                <input
                                        type="text"
                                        name="propietario"
                                        className="u-full-width"
                                        placeholder="nombre propietario mascota"
                                />

                                <label>Fecha</label>
                                <input
                                        type="date"
                                        name="fecha"
                                        className="u-full-width"
                                />

                                <label>Hora</label>
                                <input
                                        type="time"
                                        name="hora"
                                        className="u-full-width"
                                />

                                <label>Síntomas</label>
                                <textarea
                                        className="u-full-width"
                                        name="sintomas"
                                ></textarea>
                                <button
                                        type="button"
                                        className="u-full-width button-primary"
                                >Agregar Cita</button>
                        </form>
                </Fragment>
         );
}
 
export default Formulario;