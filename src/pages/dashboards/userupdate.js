import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Newupdate = () => {
    return<>
        <Header />
        <Navs />
        <section className="top">
            <h1>Modificar Usuario</h1>
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
                        <p id="ppa"><label for="nmb" className="form-label">Nombres:</label>
                            <input type="text" className="form-control" id="name" name="name" size="20"/>
                        </p>
                        <p id="ppa">
                            <label for="ape" className="form-label">Apellidos:</label>
                            <input type="text" className="form-control" id="apellido" name="apellido" size="20"/>    
                        </p>
                        <p id="ppa">
                            <label for="dir" className="form-label">Direccion:</label>
                            <input type="text" className="form-control" id="addres" name="addres" size="20"/>
                        </p>
                        <p id="ppa">
                            <label for="edad" className="form-label">Edad:</label>
                            <input type="number" className="form-control" id="edad" name="edad" size="20"/>
                        </p>
                        <p id="ppa">
                            <label for="ced" className="form-label">Cedula:</label>
                            <input type="number" className="form-control" id="cedula" name="cedula" size="20"/> 
                        </p>
                        <p id="ppa">
                            Datos de Acceso
                        </p>
                        <p id="ppa">
                            <label for="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" size="20"/>
                        </p>
                        <p id="ppa">
                            <label for="password" className="form-label">Contraseña:</label>
                            <input type="password" className="form-control" id="pass" name="password"/>
                        </p>
                        <p id="ppa">
                            <label for="password" className="form-label">Confirmar contraseña:</label>
                            <input type="password" className="form-control" id="pass" name="password"/>
                        </p>
                        <p id="ppa">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Activo</label>
                        </p>
                    </div>
                    <div>
                        <p><button type="button" className="btn btn-dark">Editar</button> <button type="button" className="btn btn-dark" disabled="true">Actualizar</button></p>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Newupdate;