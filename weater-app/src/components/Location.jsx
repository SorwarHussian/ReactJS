import React from "react";

const Location = (props) => {
  //Destructuring of props
  //De esta forma extraemos los porps de una forma legible y entendible

  const { city, country } = props;

  //Retornar la vista
  return (
    <h3>
      {" "}
      {city} , {country}
    </h3>
  );
};

export default Location;
