import React from "react";

import Navn from "../components/navn";
import Header from "../components/header";

const Vacunas = () =>{
    return <>
        <Header />
        <Navn />
        <section>
            <h1>Vacunas</h1>
            <article className="flex-container wrap">
                <div>
                    <div>
                        <h2>Esquema de vacunacion completa para niños</h2>
                    </div>
                    <div>
                        <img src="/img/esquema-vacunacion.jpg"/>
                    </div>
                </div>
            </article>
            <article className="flex-container wrap">
                <div>
                    <div>
                        <h2>Vacunas contra el covid-19</h2>
                    </div>
                    <div>
                        <img src="/img/vaccine.jpg"/>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Vacunas;