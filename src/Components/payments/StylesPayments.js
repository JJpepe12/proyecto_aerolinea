import styled from "styled-components";

export const StyledSection = styled.section`
margin-bottom: 1rem;
font-size: 2rem;
display: flex;
flex-direction: column;
align-items: center;
h1 {
    /* margin-left: -72%; */
}
`;

export const StyledPayments = styled.article`
display: flex;
flex-direction: row;
justify-content: space-between;
border-radius: 20px;
box-shadow:0 10px 20px -10px rgba(0, 0, 0, 0.2);
padding: 10px;
border: 1px solid rgb(238, 238, 238);
padding: 40px;
width:96%;
align-items: center;

h2 {
    margin-bottom: 1rem;
    font-weight: lighter;
}

ul {
    display: flex;
    gap: 2rem;
}

`;
