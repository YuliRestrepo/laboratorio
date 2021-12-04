import React from "react";
import { Link } from 'react-router-dom';

import Navs from "../../components/admin/navs";
import Header from "../../components/header";

const Newuser = () => {
    return <>
        <Header />
        <Navs />
        <section className="top">
            <article>
                <h1>Nuevo Usuario</h1>
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
                        <input type="number" className="form-control" id="edad" placeholder="edad" name="edad" size="20"/>
                    </div>
                    <div>
                        <label for="ced" className="form-label">Cedula:</label>
                        <input type="number" className="form-control" id="cedula" name="cedula" size="20"/> 
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
                    <div>
                        <p id="ppa">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Activo:</label>
                        </p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-dark">Registrar</button>
                        <button type="button" className="btn btn-dark"> <Link to="/dashboard">Cancelar</Link></button>
                    </div>
                </form>
            </article>
        </section>
    </>;
};

export default Newuser;