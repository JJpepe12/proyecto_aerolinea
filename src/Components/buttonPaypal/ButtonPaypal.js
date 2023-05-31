import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PlaneIcon from "../../assets/icons/plane.svg";

const Button = styled.button`
    border-radius: 15px;
    border: 1px solid #9e1071;
    background-color: #9e1071;
    padding: 10px 16px;
    margin-top: 1rem;
    margin-left: auto;
    font-size: 16px;
    width: 180px;
    color: #fff;
    position: fixed;
    top: 69%;
    right: 80px;
    width: 25%;
    cursor: pointer;

    @media (max-width: 1440px) {
    position: fixed;
    top: 61%;
    right: 40px;
    width: 25%;
    }
    @media (max-width: 768px) {
    position: relative;
    top: -35px;
    left: 295px;

    }
    @media (max-width: 426px) {
    position: relative;
    top: -35px;
    left: 160px;
    }
`;


const ButtonPaypal = () => {
    const navigate = useNavigate();
    return (
        <>
            <Button onClick={() => navigate('/proyecto_aerolinea/seats')} 
            startIcon={<img src={PlaneIcon} alt="Plane Icon" />}>
            Pagar con Paypal
            </Button>
        </>
        );
    };
    
export default ButtonPaypal