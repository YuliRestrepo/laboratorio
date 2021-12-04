import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Newexam = () => {
    return <>
        <Header />
        <Navs />
        <section className="top">
            <h1>Nuevo Examen</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <p id="ppa">Nombre de examen: <input type="text" className="form-control" id="nmbexam" name="nmbexam" size="20"/></p>
                    <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20"/></p>
                    <p id="ppa">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Con descripcion</label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Sin descripcion</label>
                    </p>
                    <p id="ppa">Descripcion: <input type="text" className="form-control" id="dexam" name="dexam" size="20" disabled="true"/></p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Agregar</button></p>
                    </div>
                    <div>
                        <center><h2>Listado de examenes</h2></center>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre de examen</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hemoglobina</td>
                                    <td>20</td>
                                    <td>Sin descripcion</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Newexam;