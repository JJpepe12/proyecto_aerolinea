import React from "react";
import GlobalStyles from "./StyleApp";
import Services from '../Footer/Services'
import Payments from "../Main/Payments";

const App = () => {
    return (
        <>
        <GlobalStyles /> 
        <Payments />
        <Services/>
        </>
    );
};

export default App;
