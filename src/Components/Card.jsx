import React from "react";

const Card = ({ciudad, pais}) => {
  return (
    <div className='card'>
        <h3>Ciudad seleccionada: {ciudad}.</h3>
        <h3>País seleccionado: {pais}.</h3>
    </div>
  )
}

export default Card;