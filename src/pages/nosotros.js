import React from "react";

import Navn from "../components/navn";
import Header from "../components/header";
import Footer from "../components/footer";

const Nosotros = () =>{
    return <>
        <Header />
        <Navn />
        <section className="top">
            <h1>NUESTRA EMPRESA</h1>
            <article NclassName="flex-container wrap">
                <div className="flex-item2 interior">
                    <p id="empresa">Clinilab es el nuevo laboratorio clinico en la ciudad de Barranquilla, Abre sus puertas al publico
                        con compromiso, responsabilidad y honestidad.
                        El laboratorio cuenta con certificaciones de calidad para brindar seguridad a nuestros clientes.
                    </p>
                </div>
                <div className="flex-item2 interior">
                    <img src="/img/certificados.jpg" id="emp"/>
                </div>
            </article>
            <article className="flex-container wrap">
                <img src="/img/tecnologia.jpg" id="emp"/>
                <div className="flex-item2 interior">
                    <p id="empresa">Contamos con tecnología de punta tanto para realizar el proceso de analisis como para la Toma
                        de los examenes.
                    </p>
                    <div className="flex-item2 interior">
                        <img src="/img/tecno.jpg" id="emp"/>
                    </div>
                </div>
            </article>
            <p></p>
            <article className="flex-container wrap">
                <div className="flex-item2 interior">
                    <p id="empresa">Contamos con personal altamente calificados</p>
                </div>
                <div className="flex-item2 interior">
                    <img src="/img/personal.jpg" id="emp"/>
                </div>
            </article>  
        </section>
        <Footer />
    </>;
};

export default Nosotros;