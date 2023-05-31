import React from "react";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import DepartureSeats from "../../Components/seatsDeparture/seatsDeparture";
import { StylesFlights } from "../selectedFlights/StylesFlights";
// import ArrivalSeats from "../../Components/arrivals/Arrivals";


const Seats = () => {

  return (
    <StylesFlights>
      <DepartureSeats />
      {/* <ArrivalSeats /> */}
      <Reservations />
      <Taxes />
    </StylesFlights>
  );
};

export default Seats;
