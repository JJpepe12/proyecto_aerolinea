import React from "react";
import GlobalStyles from "./StyleApp";
import Banner from "../Banner/Banner";
import MainHeader  from "../Main/MainHeader";
import Footer from '../Footer/Footer'
import Header from '../Header/Header';

const App = () => {
    return (
        <>
        <GlobalStyles />
        <Header/>
        <Banner />
        <MainHeader/> 
        <Footer/>
        </>
    );
};

export default App;
