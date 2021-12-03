import React from "react";

import Nav from './../components/nav'
import Header from './../components/header'
import Footer from './../components/footer'

const Home = () => {
    return <>
        <Header />
        <Nav />
        <aside>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id="fotos" src="/img/slide1.jpg" alt="slide1" className="d-block w-100"></img>
                    </div>
                    <div className="carousel-item">
                        <img id="fotos" src="/img/slide2.jpg" alt="slide2" className="d-block w-100"></img>
                    </div>
                    <div className="carousel-item">
                        <img id="fotos" src="/img/slide3.jpg" alt="slide3" className="d-block w-100"></img>
                    </div>
                    <div className="carousel-item">
                        <img id="fotos" src="/img/slide4.jpg" alt="slide4" className="d-block w-100"></img>
                    </div>
                    <div className="carousel-item">
                        <img id="fotos" src="/img/slide5.jpg" alt="slide5" className="d-block w-100"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </aside>
        <section>
            <article>
                <ul className="flex-container wrap">
                    <li className="flex-item">
                        <div className="interior">
                            <p id="lista">Horario de Atención</p>
                            <img src="/img/horario-removebg-preview.png"></img>
                            <button type="button" className="btn btn-dark">Consultar</button>
                        </div>
                    </li>
                    <li className="flex-item">
                        <img src="/img/laboratory.jpg" className="flex-item1"></img>
                    </li>
                    <li className="flex-item">
                        <div className="interior">
                            <p id="lista">Resultados</p>
                            <img src="/img/result-removebg-preview.png"></img>
                            <button type="button" className="btn btn-dark">Ver Resultados</button>
                        </div>
                    </li>
                </ul>
            </article>
            <article>
                <ul className="flex-container wrap">
                    <li className="flex-item">
                        <img src="/img/vaccine.jpg" className="flex-item1"></img>
                    </li>
                    <li className="flex-item">
                        <div className="interior">
                            <p id="lista">Toma de Muestras</p>
                            <img src="/img/muestra-removebg-preview.png"></img>
                            <button type="button" className="btn btn-dark">Agendar</button>
                        </div>
                    </li>
                    <li className="flex-item">
                        <img src="/img/adn.jpg" className="flex-item1"></img>
                    </li>
                </ul>
            </article>
            <article className="contacto-container wrap">
                <h1 id="contact">CONTACTANOS</h1>
            </article>
            <article className="contacto-container wrap">
                <form action="#">
                    <div>
                        <label for="nmb" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" id="nmb" placeholder="Nombre" name="nombre"></input>
                    </div>
                    <div>
                        <label for="email" className="form-label">email:</label>
                        <input type="email" className="form-control" id="email" placeholder="correo" name="email"></input>
                    </div>
                    <div>
                        <label for="num" className="form-label">Celular:</label>
                        <input type="number" className="form-control" id="cel" placeholder="Celular" name="celphone"></input>
                    </div>
                    <div>
                        <label for="comment">Mensaje:</label>
                        <textarea className="form-control" rows="6" cols="10" id="comment" name="text"></textarea>  
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                <img src="/img/contact-removebg-preview.png" className="flex-item2"></img>
            </article>
        </section>
        <Footer />
    </>;
};

export default Home;