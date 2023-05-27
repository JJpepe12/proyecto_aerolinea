import React from "react";
import ServicesCards from '../Footer/Services'
import Payments from "../Main/Payments";
import HomeForm from '../HomeForm/HomeForm'

const Home = () => {
    return (
        <>
        <HomeForm />
        <Payments />
        <ServicesCards />
        </>
    );
};

export default Home;
