import styled from "styled-components";

export const StylesCards = styled.article`
width: 270px;
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
box-shadow:0 10px 20px -10px rgba(0, 0, 0, 0.2);
border: 1px solid rgb(238, 238, 238);
border-radius: 10px;
margin-bottom: 2rem;
padding: 15px;

img{
    margin-bottom: 2rem;
    width: 80px;
    height: 80px; 
    &:hover {
        filter: brightness(50%);
        cursor: pointer;
      }
}

h3{
    margin-bottom: 1rem; 
}
p{
    color: rgb(180, 180, 180);
}

  /* @media (max-width: 376px) {
    gap: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      padding-left: 140px;
    }
    .Logo img {
      width: 200px;
      margin-left: 90px;
    }
    .Link {
      display: inline-block;
      width: 60%;
      margin-top: 20px;
      margin-left: 75px;
      line-height: 30px;
      text-align: center;
    }
    .Social_networks {
      margin-left: 125px;
      padding-top: 15px;
      gap: 10px;
    }
    .contenedor_2 {
      column-count: 1;
    }
  } */
`;
