import React from "react";
import { StylesCard } from "./StyleCards";

const Cards = ({ agent }) => {
  return (
    <StylesCard className="StylesCard">
      <div className="window1440">
      <figure>
        <img src={agent.image} alt={agent.name} />
      </figure>
      <div className="cardname">
        <h3>{agent.name}</h3>
      </div>
      </div>
      <div className="mobile">
      <figure className="image375">
        <img src={agent.imagemobile} alt={agent.name} />
      </figure>
      <div className="cardnameMobile">
        <h3>{agent.name}</h3>
      </div>
      </div>
    </StylesCard>
  );
};

export default Cards;
