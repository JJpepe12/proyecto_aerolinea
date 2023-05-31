import React from "react";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import Arrivals from "../../Components/arrivals/Arrivals";
import Departures from "../../Components/departures/Departures";
import { StylesFlights } from "./StylesFlights"
import ButtonSeats from "../../Components/buttonSeats/ButtonSeats";

const Flights = () => {
  return (
    <StylesFlights>
      <Departures />
      <Arrivals />
      <Reservations />
      <Taxes />
      <ButtonSeats />
    </StylesFlights>
  );
};

export default Flights;
