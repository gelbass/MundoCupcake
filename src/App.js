import './App.css';

function App() {
  let logoMc = "./mundocupcake-02.png";
  let logoConstruccion ="./sitioEnConstruccion.jpg"
  return (
    <div className='container p-5 text-center justify-content-center'>
      <div className="row justify-content-center">
        <div className="col-4 align-item-center">
          <img src={logoMc} className='img-fluid ' alt='mundocupcake'/>
        </div>
        <div className="col-6">
          <h1 className=''>MUNDO CUPCAKE</h1>
          <p>Sitio en construccion</p>
          <img src={logoConstruccion} className='img-fluid' alt='sitioEnConstruccion'/>
        </div>
      </div>
    </div>
  );
}

export default App;
