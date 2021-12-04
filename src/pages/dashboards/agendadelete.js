import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Agendadelete = () => {
    return <>
        <Header />
        <Navs />
        <section className="top">
            <h1>Eliminar Examen Agendado</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20"/></p>
                    <p id="ppa">Código de Paciente: <input type="number" className="form-control" id="cedula" name="cedula" size="20"/></p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Buscar</button></p>
                    </div>
                    <div>
                        <center><h2>Agenda</h2></center>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">seleccion</th>
                                    <th scope="col">Código de examen</th>
                                    <th scope="col">Código del Paciente</th>
                                    <th scope="col">Fecha de cita</th>
                                    <th scope="col">Hora de cita</th>
                                    <th scope="col">Hora fin de cita</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" className="form-check-input" id="exampleCheck1"/></td>
                                    <td>1</td>
                                    <td>3452678</td>
                                    <td>27/11/2021</td>
                                    <td>7:00</td>
                                    <td>7:15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Notificar al Paciente</label>
                    </p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Eliminar</button></p>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Agendadelete;