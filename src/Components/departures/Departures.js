import React from "react";
import { StyleBottonDeparture, StyleDeparture, StyledContainer, StyledDate } from "./StylesDeparture";
import { StyleCardDateBaggage, StyleTable, StyledTd, StyledTdLast  } from "./StylesCardDateBaggage";
import Briefcase from "../../assets/icons/briefcase.svg";
import Scala from "../../assets/icons/Scala.png"


const Departures = () => {
  return (
    <div>
      <StyledDate>
        <StyledContainer>
        <h1>Vuelo de Salida</h1>
        <StyleBottonDeparture>Cambiar vuelo</StyleBottonDeparture>
        </StyledContainer>
        <h2>Martes 30 nov 2021</h2>
        <h4>Cd. Mex (AICM) a Culiacán </h4>
        <p>Selección de horarios y equipaje</p>
      </StyledDate>
      
      <StyleDeparture>
      <StyleCardDateBaggage>
          <StyleTable>
            <tr>
              <StyledTd><h2>5:50 PM</h2></StyledTd>
              <StyledTd><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTd>
              <StyledTd><h2>6:47 PM</h2></StyledTd>
              <hr />
              <StyledTdLast>
                <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast>
                <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast>
                <img src={ Briefcase }  alt="Briefcase" /> <span> Equipaje 25kg</span><h4>$ 120.000 COP</h4>
              </StyledTdLast>
            </tr>
          </StyleTable>
      </StyleCardDateBaggage>

      <StyleCardDateBaggage>
          <StyleTable>
            <tr>
              <StyledTd><h2>8:50 AM</h2></StyledTd>
              <StyledTd><span>1 h 57 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTd>
              <StyledTd><h2>9:47 PM</h2></StyledTd>
              <hr />
              <StyledTdLast>
                <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast>
                <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
              </StyledTdLast>
              <StyledTdLast>
                <img src={ Briefcase }  alt="Briefcase" /> <span> Equipaje 25kg</span><h4>$ 120.000 COP</h4>
              </StyledTdLast>
            </tr>
          </StyleTable>
      </StyleCardDateBaggage>
      </StyleDeparture>
    </div>
  );
};

export default Departures;