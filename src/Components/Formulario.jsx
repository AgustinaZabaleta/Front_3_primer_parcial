import '../styles/Formulario.css'
import { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const [locacion, setlocacion] = useState({
    ciudad: "",
    pais: "",
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    if (locacion.ciudad.length >= 3 && locacion.pais.length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div className='formulario'>
      {!show && (
        <form onSubmit={handleSumbit} >
          <label>Ingrese la ciudad</label>
          <input
            type="text"
            value={locacion.ciudad}
            onChange={(event) => setlocacion({ ...locacion, ciudad: event.target.value.trim() }) }
          />

          <label>Ingrese el pais</label>
          <input
            type="text"
            value={locacion.pais}
            onChange={(event) => setlocacion({ ...locacion, pais: event.target.value.trim() }) }
          />

          <button>Enviar</button>
        </form>
      )}
      {show && <Card ciudad={locacion.ciudad} pais={locacion.pais} />}
      {error && ( <h5>Por favor chequea que la información sea correcta</h5> )}
    </div>
  );
};

export default Formulario;
