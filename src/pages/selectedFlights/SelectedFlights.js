import React from "react";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import Arrivals from "../../Components/arrivals/Arrivals";
import Departures from "../../Components/departures/Departures";
import { StylesFlights } from "./StylesFlights"

const Flights = () => {
  return (
    <StylesFlights>
      <Departures />
      <Arrivals />
      <Reservations />
      <Taxes />
    </StylesFlights>
  );
};

export default Flights;
