import React from "react";
import { Date, Title, Container, BackpackTable, Td, BackpackCards } from "./StylesDepartures";
import Briefcase from "../../assets/icons/briefcase.svg";
import Scala from "../../assets/icons/Scala.png"


const Departures = () => {
  return (
    <>
      <Date>
        <Title>
        <h1>Vuelo de salida</h1>
        <button className="btn__change">Cambiar vuelo</button>
        </Title>
        <h2>Martes 30 nov 2021</h2>
        <h4>Cd. Mex (AICM) a Culiacán </h4>
        <p>Selección de horarios y equipaje</p>
      </Date>
      
      <Container>
        <BackpackTable>
          <tr>
            <Td><h2>5:50 PM</h2></Td>
            <Td>1h 57min<img src={ Scala }  alt="Escala" /> sin escalas</Td>
            <Td><h2>6:47 PM</h2></Td>
            <hr />
            <BackpackCards>
              <img src={ Briefcase }  alt="Briefcase" />1 objeto personal<h2>$ 60.000 COP</h2>
            </BackpackCards>
            <BackpackCards>
              <img src={ Briefcase }  alt="Briefcase" />Equipaje de mano<h2>$ 90.000 COP</h2>
            </BackpackCards>
            <BackpackCards>
              <img src={ Briefcase }  alt="Briefcase" />Equipaje 25kg<h2>$ 120.000 COP</h2>
            </BackpackCards>
          </tr>
        </BackpackTable>
      </Container>

      <Container>
          <BackpackTable>
            <tr>
              <Td><h2>8:50 AM</h2></Td>
              <Td>1 h 57 min <img src={ Scala }  alt="Escala" /> sin escalas</Td>
              <Td><h2>9:47 PM</h2></Td>
              <hr />
              <BackpackCards>
                <img src={ Briefcase }  alt="Briefcase" />1 objeto personal<h2>$ 60.000 COP</h2>
              </BackpackCards>
              <BackpackCards>
                <img src={ Briefcase }  alt="Briefcase" />Equipaje de mano<h2>$ 90.000 COP</h2>
              </BackpackCards>
              <BackpackCards>
                <img src={ Briefcase }  alt="Briefcase" />Equipaje 25kg<h2>$ 120.000 COP</h2>
              </BackpackCards>
            </tr>
          </BackpackTable>
      </Container>
    </>
  );
};

export default Departures;