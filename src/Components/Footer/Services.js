import React from 'react';
import { StyledTitle } from '../Main/StylesPayments';
import { services } from '../../data/Data';
import Cards from '../footerCards/footerCards';
import { StyledServices } from './StylesServices';

const ServicesCards = () => {
  
    return (
      <div>
        
        <StyledTitle>
            <h3>Servicios disponibles</h3>
        </StyledTitle>
        <StyledServices>
        {services.map((agent) => (
          <Cards key={agent.id} agent={agent} />
        ))}
        </StyledServices>
        </div>

    )
}

export default ServicesCards;