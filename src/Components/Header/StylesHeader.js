import styled from "styled-components";
import image from '../../assets/desktop/image-hero.jpg';
import imageMobile from '../../assets/mobile/image-hero.jpg';

export const StylesHeader = styled.header`
   background-image: url(${image}) ;
   background-size: cover;
   height: 40rem;
   

   @media screen and (max-width:376px){
      background-image:  url(${imageMobile});
      justify-content: center;
   }
`;