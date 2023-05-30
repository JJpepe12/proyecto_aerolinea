import React from "react";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import Arrivals from "../../Components/arrivals/Arrivals";
import Departures from "../../Components/departures/Departures";

const Flights = () => {
  return (
    <>
      <Departures />
      <Arrivals />
      <Reservations />
      <Taxes />
    </>
  );
};

export default Flights;
