import React from "react";

const EnConstruccion = () => {
    let logoMc = "./mundocupcake-02.png";
    let logoConstruccion = "./sitioEnConstruccion.jpg"
    return (
        <div>
            <div className="jumbotron">
                <img src={logoMc} className='img-fluid ' alt='mundocupcake' />
                <h3>Un mundo de sabores</h3>
            </div>
            <div className='container p-5 text-center justify-content-center'>
                <p>Sitio en construccion</p>
                <img src={logoConstruccion} className='img-fluid' alt='sitioEnConstruccion' />
            </div>
        </div>
    );
}
export default EnConstruccion;