import React from "react";
import GlobalStyles from "./StyleApp";
import ServicesCards from '../Footer/Services'
import Payments from "../Main/Payments";

const App = () => {
    return (
        <>
        <GlobalStyles /> 
        <Payments />
        <ServicesCards />
        </>
    );
};

export default App;
