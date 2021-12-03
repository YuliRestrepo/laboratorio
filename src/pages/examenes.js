import React from "react";

import Navn from "../components/navn";
import Header from "../components/header";

const Examenes = () => {
    return <>
        <Header />
        <Navn />
        <section>
            <article className="flex-container wrap">
                <div>
                    <div>
                        <h2>Examenes clinicos que ofrecemos</h2>
                    </div>
                    <div>
                        <img src="/img/FOLLETO_INFORMATIVO_1-450px.png"/>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Examenes;