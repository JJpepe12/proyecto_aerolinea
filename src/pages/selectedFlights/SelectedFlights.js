import React from "react";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import Arrivals from "../../Components/arrivals/Arrivals";
import Departures from "../../Components/departures/Departures";
import { FormularioProvider } from '../selectedFlights/FormularioContext'
const Flights = () => {
  
  return (
    <FormularioProvider>
      <Departures />
      <Arrivals />
      <Reservations />
      <Taxes />
    </FormularioProvider>
  );
};

export default Flights;
