import React from 'react';
import { StyledSection } from '../payments/StylesPayments';
import { services } from '../../data/Data';
import Cards from '../footerCards/footerCards';
import { StyledServices } from './StylesServices';

const ServicesCards = () => {
  return (
    <StyledSection> 
      <h1 id='titleServices'>Servicios disponibles</h1>
        <StyledServices>
          {services.map((service) => (
          <Cards key={service.id} service={service} />
          ))}
        </StyledServices>
    </StyledSection>  

    )
}

export default ServicesCards;