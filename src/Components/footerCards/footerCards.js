import React from "react";
import { StylesCards } from "./StylesCards";

const Cards = ({ services }) => {
  return (
    <StylesCards>
      <figure>
        <img src={services.image} alt={services.name} />
      </figure>
      <h3>{services.name}</h3>
      <p>{services.description}</p>
    </StylesCards>
  );
};

export default Cards;
