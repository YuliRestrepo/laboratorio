import React from "react";

const Header = () => {
    return (
        <header>
            <div className="mt-4 p-5 bg-primary text-white rounded">
                <div id="contenedor">
                    <img src="img/icon1-removebg-preview.png"></img>
                    <div>
                        <h1>CLINILAB</h1>
                        <p>Laboratorio clínico</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;