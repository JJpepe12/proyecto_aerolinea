import React from "react";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import DepartureSeats from "../../Components/seatsDeparture/seatsDeparture";
import ArrivalsSeats from "../../Components/seatsArrivals/seatsArrivals";
import { StylesFlights } from "../selectedFlights/StylesFlights";
import ButtonPaypal from "../../Components/buttonPaypal/ButtonPaypal";


const Seats = () => {

  return (
    <StylesFlights>
      <DepartureSeats />
      <ArrivalsSeats />
      <Reservations />
      <Taxes />
      <ButtonPaypal />
    </StylesFlights>
  );
};

export default Seats;
