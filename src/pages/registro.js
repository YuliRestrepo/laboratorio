import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Navn from "../components/navn";
import Formregister from "../components/formregister";

const Registro = () => {
    return<>
        <Header />
        <Navn />
        <section class="top">
            <article>
                <h1>REGISTRO</h1>
            </article>
            <article className="flex-container">
                <Formregister />    
            </article>
            <article className="flex-container">
                <p>
                    <button type="button" className="btn btn-dark"><Link to="/login">Registrarme</Link></button>
                    <button type="button" className="btn btn-dark"> <Link to="/">Cancelar</Link></button>
                </p>
            </article>
        </section>
    </>;
};

export default Registro;