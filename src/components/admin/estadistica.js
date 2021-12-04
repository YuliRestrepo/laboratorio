import React from "react";

const Estadisticas = () => {
    return (
        <section className="top">
            <h1>ESTADISTICAS</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <div>
                        <h2>USUARIOS INTERNOS</h2>
                    </div>
                    <div>
                        <p id="ppa">Numero de usuarios: </p><p id="ppa"><label>Aqui aparece la cantidad</label></p>
                    </div>
                    <div>
                        <ul>
                            <li>usuario 1</li>
                            <li>usuario 1</li>
                            <li>usuario 1</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <h2>Examenes</h2>
                    <div>
                        <p><label for="sel1" className="form-label">Tipo de examen: (seleccione una opcion)</label>
                            <select className="form-select" id="sel1" name="sellist1">
                                <option>Sangre</option>
                                <option>Orina</option>
                                <option>Corpologico</option>
                            </select>
                        </p>
                    </div>
                    <p>Total:<label>Aqui aparece la cantidad</label></p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tipo de examen</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Sangre</td>
                                <td>Diabetes</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Sangre</td>
                                <td>hemograma</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Orina</td>
                                <td>urocultivo</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <h2>TOMA DE MUESTRAS</h2>
                    <div>
                        <h2>Datos</h2>
                        <p id="ppa">Dia: <input type="number" className="form-control" id="day" name="dia" size="20"/></p>
                        <p id="ppa">Mes: <input type="number" className="form-control" id="month" name="mes" size="20"/></p>
                        <p><button type="button" className="btn btn-dark">Buscar</button></p>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Total Muestras (día)</th>
                                    <th scope="col">Total Muestra Semanal</th>
                                    <th scope="col">Total Muestra Mensual</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>50</td>
                                    <td>200</td>
                                    <td>1500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2>Muestras por Paciente</h2>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id_paciente</th>
                                    <th scope="col">Total Muestras</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>335564234</td>
                                    <td>25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Estadisticas;