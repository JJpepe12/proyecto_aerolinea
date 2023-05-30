import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Home from "../pages/home/Home";
// import Destination from "../Components/destination/Destination";
// import Technology from "../Components/technology/Technology";
import Flights from "../pages/selectedFlights/SelectedFlights";



const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
         
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
                <Route path="flights" element={<Flights />} />
                {/* <Route path="destination" element={<Destination />} />
                <Route path="technology" element={<Technology />} /> */}
          </Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;