import React from "react";

/***
 * Destructing: tecnica de JavaScript para desempaquetar valores
 * des de arrays, objetos , props, this ...
 * De esta forma codigo es mas legible
 */

//utilizando destructing
const Location = (props) => {
  const { city, country } = props;

  //Retornar la vista
  return (
    <h3>
      {city} , {country}
    </h3>
  );
};

export default Location;
