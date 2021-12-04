import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Userdelete = () =>{
    return<>
        <Header />
        <Navs />
        <section className="top">
            <h1>Eliminar Usuario</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <p id="ppa">Cedula del usuario: <input type="number" className="form-control" id="cedula" name="cedula" size="20"/></p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Buscar</button></p>
                    </div>
                    <div>
                        <center><h2>Informacion del usuario</h2></center>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Cedula</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">edad</th>
                                    <th scope="col">correo</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" className="form-check-input" id="exampleCheck1"/></td>
                                    <td>55443267</td>
                                    <td>Miguel antonio</td>
                                    <td>Sanchez valencia</td>
                                    <td>Calle 30 N 11-43</td>
                                    <td>30</td>
                                    <td>msanchezv@clinilab.com</td>
                                    <td>Inactivo</td>
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

export default Userdelete;