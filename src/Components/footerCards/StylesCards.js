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

h2{
    margin: -1rem 0 1rem; 
    font-size: 1.5rem;
}
p{
    color: gray;
}
`;
