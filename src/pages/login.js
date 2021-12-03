import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Navn from "../components/navn";

const Login = () => {
    return<>
        <Header />
        <Navn />
        <section className="top">
            <article className="flex-container wrap">
                <div className="flex-iteml">
                    <img src="/img/image-removebg-preview.png" className="flex-item3"/>
                </div>
                <div className="flex-iteml-1">
                    <h1>LOGIN</h1>
                    <form action="#">
                        <div>
                            <label for="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="correo" name="email" size="20"/>
                        </div>
                        <div>
                            <label for="password" className="form-label">Contraseña:</label>
                            <input type="password" className="form-control" id="pass" placeholder="contraseña" name="password"/>
                        </div>
                        <button type="button" className="btn btn-dark">Ingresar</button>
                    </form>
                    <p id="link">No tiene cuenta?, <Link to="/registro" id="link">Registrate</Link></p>
                </div>
            </article>
        </section>
    </>;
};

export default Login;