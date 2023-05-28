import React from "react";
import { StyleArrivals, StyleBottonArrivals, StyledContainerArrival, StyledDateArrival } from "./StylesArrivalsFlight";
import { StyleTableArrivals, StyledCardDateArrivals, StyledTdArrivals, StyledTdLastArrivals } from "./StyledCardDateArrivals";
import Briefcase from "../../assets/icons/briefcase.svg";
import Scala from "../../assets/icons/Scala.png"

const Arrivals = ({ selectedContainer, handleContainerClick }) => {
  return (
    <div>
      <StyledDateArrival>
        <StyledContainerArrival>
        <h1>Vuelo de Regreso</h1>
        <StyleBottonArrivals>Cambiar vuelo</StyleBottonArrivals>
        </StyledContainerArrival>
        <h2>Miércoles 08 dic 2021</h2> cambiar fecha
        <h4>Culiacán a Cd. Mex (AICM)</h4>
        <p>Selección de horarios y equipaje</p>
      </StyledDateArrival>

      <StyleArrivals>
      <StyledCardDateArrivals>
            <StyleTableArrivals>
              <tr>
                <StyledTdArrivals><h2>7:25 PM</h2></StyledTdArrivals>
                <StyledTdArrivals><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTdArrivals>
                <StyledTdArrivals><h2>9:47 PM</h2></StyledTdArrivals>
                <hr />

                <StyledTdLastArrivals selected={selectedContainer === 6} onClick={() => handleContainerClick(6)} >
                  <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4>
                  </StyledTdLastArrivals >
                <StyledTdLastArrivals selected={selectedContainer === 7} onClick={() => handleContainerClick(7)}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
                  </StyledTdLastArrivals>
                <StyledTdLastArrivals selected={selectedContainer === 8} onClick={() => handleContainerClick(8)}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4>
                  </StyledTdLastArrivals>

              </tr>
            </StyleTableArrivals>
        </StyledCardDateArrivals>

        <StyledCardDateArrivals>
            <StyleTableArrivals>
              <tr>
                <StyledTdArrivals><h2>8:50 PM</h2></StyledTdArrivals>
                <StyledTdArrivals><span>2 h 30 min</span> <img src={ Scala }  alt="Escala" /> <span>sin escalas</span> </StyledTdArrivals>
                <StyledTdArrivals><h2>10:47 PM</h2></StyledTdArrivals>
                <hr />
                <StyledTdLastArrivals selected={selectedContainer === 9} onClick={() => handleContainerClick(9)}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span>1 objeto personal</span><h4>$ 60.000 COP</h4> 
                </StyledTdLastArrivals >
                <StyledTdLastArrivals selected={selectedContainer === 10} onClick={() => handleContainerClick(10)}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span>Equipaje de mano</span><h4>$ 90.000 COP</h4>
                </StyledTdLastArrivals>
                <StyledTdLastArrivals selected={selectedContainer === 11} onClick={() => handleContainerClick(11)}>
                  <img src={ Briefcase }  alt="Briefcase" /> <span> Equiaje 25kg</span><h4>$ 120.000 COP</h4>
                </StyledTdLastArrivals>
              </tr>
            </StyleTableArrivals>
        </StyledCardDateArrivals>
      </StyleArrivals>
    </div>
  );
};

export default Arrivals;