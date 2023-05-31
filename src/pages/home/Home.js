import React from "react";
import HomeForm from '../../Components/HomeForm/HomeForm'
import ServicesCards from '../../Components/footer/Services'
import Payments from "../../Components/payments/Payments";


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
