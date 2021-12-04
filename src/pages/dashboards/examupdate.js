import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";

const Newupdate = () => {
    return <>
        <Header />
        <Navs />
        <section className="top">
            <h1>Modificar Examen</h1>
            <article className="dashboard-container">
                <div className="dashboard top">
                    <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20"/></p>
                    <div>
                        <p><button type="button" className="btn btn-dark">Buscar</button></p>
                    </div>
                    <div>
                        <center><h2>Informacion del Examen</h2></center>
                    </div>
                    <div>
                        <p id="ppa">Nombre de examen: <input type="text" className="form-control" id="nmbexam" name="nmbexam" size="20" disabled="true"/></p>
                        <p id="ppa">Código de examen: <input type="number" className="form-control" id="numexam" name="numexam" size="20" disabled="true"/></p>
                        <p id="ppa">Descripcion: <input type="text" className="form-control" id="dexam" name="dexam" size="20" disabled="true"/></p>
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