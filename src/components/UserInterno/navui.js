import React from "react";
import { Link } from 'react-router-dom';

const Navui = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/uidrashboard" className="nav-link">Estadisticas</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Examenes</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown08">
                                <li><Link to="/newexam" className="dropdown-item">Crear Nuevo</Link></li>
                                <li><Link to="/examupdate" className="dropdown-item">Modificar Examen</Link></li>
                                <li><Link to="/examdelete" className="dropdown-item">Eliminar Examen</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Toma de Muestras</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown08">
                                <li><Link to="/newagenda" className="dropdown-item">Agendar</Link></li>
                                <li><Link to="/agendaupdate" className="dropdown-item">Modificar Agendamiento</Link></li>
                                <li><Link to="/agendadelete" className="dropdown-item">Eliminar Agendamiento</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Resultados de examenes</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown08">
                                <li><Link to="/newresult" className="dropdown-item">Crear</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Cerrar Sesion</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navui;