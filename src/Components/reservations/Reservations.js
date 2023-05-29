import React from "react";
import { Container, Subcontainer, TimeDetails } from "./StylesReservations";
import Line from "../../assets/icons/line.png";

const Reservations = () => {
    return (
        <>
        <Container>
            <h1>Tu reservación</h1>
            <Subcontainer>
                <div className="top__text">
                    <h3>Pasajeros</h3>
                    <h3>1 Adulto</h3>
                </div>
            <p>Vuelo de salida</p>
                <div className="middle__text">
                    <h1>MEX</h1>
                    <img src={Line} alt="line" />
                    <h1>CUL</h1>
                </div>
                <TimeDetails>
                    <p>05:45 PM</p>
                    <span></span>
                    <p>06:47 PM</p>
                </TimeDetails>
            <p>Martes, 30 noviembre, 2021</p>
            </Subcontainer>
        </Container>
        </>
    );
};

export default Reservations;
