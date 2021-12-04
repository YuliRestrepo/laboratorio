import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Newresult = () => {
    return <>
        <Header />
        <Navs />
        <section className="top">
            <h1>Creación de Resultados de los Examenes</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20"/></p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Buscar</button></p>
                    </div>
                    <div>
                        <center><h2>Listado de Resultados pendientes</h2></center>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Seleccion</th>
                                    <th scope="col">Codigo del Paciente</th>
                                    <th scope="col">Nombre del paciente</th>
                                    <th scope="col">Codigo del Examen</th>
                                    <th scope="col">Nombre del Examen</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">opcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" className="form-check-input" id="exampleCheck1"/></td>
                                    <td>23456712</td>
                                    <td>Miguel</td>
                                    <td>2</td>
                                    <td>Hemoglobina</td>
                                    <td>Pendiente</td>
                                    <td><button type="button" className="btn btn-dark" disabled="true">datos</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p id="ppa">Ingresar Resultados</p>
                    </div>
                    <div>
                        <p id="ppa"><label for="nmb" className="form-label">Hemoglobina:</label><input type="number" className="form-control" id="numexam" name="numexam" size="20"/></p>
                    </div>
                    <div>
                        <p><button type="button" className="btn btn-dark" disabled="true">Guardar y notificar</button></p>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Newresult;