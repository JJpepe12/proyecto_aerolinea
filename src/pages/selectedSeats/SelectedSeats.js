import React from "react";
import Taxes from "../../Components/taxes/Taxes";
import Reservations from "../../Components/reservations/Reservations";
import DepartureSeats from "../../Components/seatsDeparture/seatsDeparture";
// import ArrivalSeats from "../../Components/arrivals/Arrivals";


const Seats = () => {

  return (
    <>
      <DepartureSeats />
      {/* <ArrivalSeats /> */}
      <Reservations />
      <Taxes />
    </>
  );
};

export default Seats;
