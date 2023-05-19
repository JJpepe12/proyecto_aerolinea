import React from 'react';
import { StyledSection, StyledPayments } from './StylesPayments';
import Amex from "../../assets/pagos/amex.svg";
import PayPal from "../../assets/pagos/paypal.svg";
import Invex from "../../assets/pagos/invex.svg";
import MasterCard from "../../assets/pagos/mastercard.svg";
import Visa from "../../assets/pagos/visa.svg";
import Oxxo from "../../assets/pagos/oxxo.svg";
import Seven from "../../assets/pagos/seven.svg";
import Walmart from "../../assets/pagos/walmart.svg";
import FarmaAhorros from "../../assets/pagos/famahorro.svg";


const Payments = () => {
    return (
        <StyledSection className='pagos'>
        <h1> Pago seguro </h1>
        <StyledPayments>
            <div>
                <h2>Tarjeta de crédito, tarjeta débito y pago electrónico</h2>
                    <ul>
                        <li> <img src={ Amex }  alt="Amex" /> </li>
                        <li> <img src={ PayPal }  alt="PayPal" /> </li>
                        <li> <img src={ Invex }  alt="Invex" /> </li>
                        <li> <img src={ MasterCard }  alt="AMasterCard" /> </li>
                        <li> <img src={ Visa }  alt="Visa" /> </li>
                    </ul>
            </div>
            <div>
                <h2>Efectivo en cualquiera de las sucursales participantes</h2>
                    <ul>
                        <li> <img src={ Oxxo }  alt="Oxxo" /> </li>
                        <li> <img src={ Seven }  alt="Seven" /> </li>
                        <li> <img src={ Walmart }  alt="Walmart" /> </li>
                        <li> <img src={ FarmaAhorros }  alt="FarmaAhorros" /> </li>
                    </ul>
            </div>
        </StyledPayments>
        </StyledSection>
    )
}

export default Payments;