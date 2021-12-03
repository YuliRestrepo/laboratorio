import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Nav from "../components/nav";

const Registro = () => {
    return<>
        <Header />
        <Nav />
        <section class="top">
            <article>
                <h1>REGISTRO</h1>
            </article>
            <article className="flex-container">
                <form action="#" className="registro">
                    <p>Datos personales</p>
                    <div>
                        <label for="nmb" className="form-label">Nombres:</label>
                        <input type="text" className="form-control" id="name" placeholder="nombres" name="name" size="20"/>
                    </div>
                    <div>
                        <label for="ape" className="form-label">Apellidos:</label>
                        <input type="text" className="form-control" id="apellido" placeholder="apellidos" name="apellido" size="20"/>
                    </div>
                    <div>
                        <label for="dir" className="form-label">Direccion:</label>
                        <input type="text" className="form-control" id="addres" placeholder="Direccion" name="addres" size="20"/>
                    </div>
                    <div>
                        <label for="edad" className="form-label">Edad:</label>
                        <input type="number" className="form-control" id="edad" placeholder="correo" name="edad" size="20"/>
                    </div>
                    <div>
                        <label for="sel1" className="form-label">Tipo de documento (seleccione una opcion):</label>
                        <select className="form-select" id="sel1" name="sellist1">
                            <option>Registro civil</option>
                            <option>Tarjeta de identidad</option>
                            <option>Cedula de Ciudadanía</option>
                            <option>Cedula extranjera</option>
                        </select>
                    </div>
                    <div>
                        <label for="id" className="form-label">Numero de documento:</label>
                        <input type="number" className="form-control" id="doc" placeholder="numero de documento" name="doc" size="20"/>
                    </div>
                    <p>Datos de acceso</p>
                    <div>
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="correo" name="email" size="20"/>
                    </div>
                    <div>
                        <label for="password" className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" id="pass" placeholder="contraseña" name="password"/>
                    </div>
                    <div>
                        <label for="password" className="form-label">Confirmar contraseña:</label>
                        <input type="password" className="form-control" id="pass" placeholder="contraseña" name="password"/>
                    </div>
                    <button type="button" className="btn btn-dark">Registrarme</button>
                    <button type="button" className="btn btn-dark"> <Link to="/">Cancelar</Link></button>
                </form>
            </article>
        </section>
    </>;
};

export default Registro;