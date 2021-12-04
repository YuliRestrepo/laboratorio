import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Examdelete = () => {
    return<>
        <Header />
        <Navs />
        <section className="top">
            <h1>Eliminar Examen</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20"/></p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Buscar</button></p>
                    </div>
                    <div>
                        <center><h2>Listado de examenes</h2></center>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Selecciona</th>
                                    <th scope="col">Nombre de examen</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" className="form-check-input" id="exampleCheck1"/></td>
                                    <td>Hemoglobina</td>
                                    <td>20</td>
                                    <td>Sin descripcion</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p><button type="button" className="btn btn-dark">Eliminar</button></p>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Examdelete;