import React from "react";
import { Date, Title, Container, BackpackTable, Td, BackpackCards } from "./StylesArrivals";
import Briefcase from "../../assets/icons/briefcase.svg";
import Scala from "../../assets/icons/Scala.png"
import { useNavigate } from 'react-router-dom';

const Arrivals = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Obtener los valores de cada componente

      // Redireccionar a otra página con los datos
      navigate('/proyecto_aerolinea')
  };

  return (
    <>
      <Date>
        <Title>
          <h1>Vuelo de regreso</h1>
          <button  onClick={handleSubmit} className="btn__change">Cambiar vuelo</button>
        </Title>
        <h2>Miércoles 8 dic 2021</h2>
        <h4>Culiacán a Cd. Mex (AICM)</h4>
        <p>Selección de horarios y equipaje</p>
      </Date>
      
      <Container>
        <BackpackTable>
          <tr>
            <Td><h2>7:28 AM</h2></Td>
            <Td>1h 57min<img src={ Scala }  alt="Escala" /> sin escalas</Td>
            <Td><h2>10:08 AM</h2></Td>
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
              <Td><h2>7:33 PM</h2></Td>
              <Td>1 h 57 min <img src={ Scala }  alt="Escala" /> sin escalas</Td>
              <Td><h2>10:13 PM</h2></Td>
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

export default Arrivals;