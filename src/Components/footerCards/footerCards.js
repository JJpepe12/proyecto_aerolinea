import React from "react";
import { StylesCards } from "./StylesCards";

const Cards = ({ service }) => {
  return (
    <StylesCards>
      <figure>
        <img src={service.image} alt={service.name} />
      </figure>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </StylesCards>
  );
};

export default Cards;
