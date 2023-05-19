import React from 'react';
import { StyledSection } from '../Main/StylesPayments';
import { services } from '../../data/Data';
import Cards from '../footerCards/footerCards';
import { StyledServices } from './StylesServices';

const ServicesCards = () => {
  return (
    <StyledSection> 
      <h3>Servicios disponibles</h3>
        <StyledServices>
          {services.map((service) => (
          <Cards key={service.id} service={service} />
          ))}
        </StyledServices>
    </StyledSection>  

    )
}

export default ServicesCards;