import React from "react";
import { Link } from 'react-router-dom';

const Navn = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/nosotros" className="nav-link">Nosotros</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Servicios</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown08">
                                <li><Link to="/vacunas" className="dropdown-item">Vacunacion</Link></li>
                                <li><Link to="/examenes" className="dropdown-item">Examenes de Laboratorio</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Ingresar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navn;
