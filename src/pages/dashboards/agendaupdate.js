import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Agendaupdate = () => {
    return <>
        <Header />
        <Navs />
        <section className="top">
            <h1>Modificar Examen Agendado</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20"/></p>
                    <p id="ppa">Código de Paciente: <input type="number" className="form-control" id="cedula" name="cedula" size="20"/></p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Buscar</button></p>
                    </div>
                    <div>
                        <h2><center>Lista</center></h2>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Código de examen</th>
                                    <th scope="col">Código del Paciente</th>
                                    <th scope="col">Fecha de cita</th>
                                    <th scope="col">Hora de cita</th>
                                    <th scope="col">Hora fin de cita</th>
                                    <th scope="col">Opcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>3452678</td>
                                    <td>27/11/2021</td>
                                    <td>7:00</td>
                                    <td>7:15</td>
                                    <td><button type="button" className="btn btn-dark">Editar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <center><h2>Agenda</h2></center>
                    </div>
                    <div>
                        <p id="ppa">Fecha de Atención: <input type="date" className="form-control" id="fecha" name="fecha" size="20" placeholder="dd/mm/aaaa" disabled="true"/></p>
                        <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20" disabled="true"/></p>
                        <p id="ppa">Hora de cita: <input type="time" className="form-control" id="hora" name="iniciocita" size="20" disabled="true"/></p>
                        <p id="ppa">Hora fin cita: <input type="time" className="form-control" id="horaf" name="fincita" size="20" disabled="true"/></p>
                        <p id="ppa">Código de Paciente: <input type="number" className="form-control" id="cedula" name="cedula" size="20" disabled="true"/></p>
                        <p>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" disabled="true"/>
                            <label className="form-check-label" for="exampleCheck1">Notificar al Paciente</label>
                        </p>
                    </div>
                    <div>
                        <p><button type="button" className="btn btn-dark" disabled="true">Modificar</button></p>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Agendaupdate;