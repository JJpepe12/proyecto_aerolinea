import React from "react";
// import { StylesFlights } from "./StylesFlights";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import Arrivals from "../../Components/arrivals/Arrivals";
import Departures from "../../Components/departures/Departures";

const Flights = () => {

    
  return (
    <>
      {/* <StylesFlights>
        <h1>Vuelos de salida</h1>
      </StylesFlights> */}
      <Departures />
      <Arrivals />
      <Reservations />
      <Taxes />
    </>
    
  );
};

export default Flights;
