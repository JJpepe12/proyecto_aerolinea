import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Home from "../pages/home/Home";
import Flights from "../pages/selectedFlights/SelectedFlights";
import Seats from "../pages/selectedSeats/SelectedSeats";


const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
         
          <Route path={"/proyecto_aerolinea"} element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="flights" element={<Flights />} />
              <Route path="seats" element={<Seats />} />
          </Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;