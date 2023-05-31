import styled from "styled-components"

export const Container = styled.aside`
position: fixed;
top: 40%;
right: 80px;
width: 25%;
    h1{
    font-size: 1.2rem;
    margin-bottom: 10px;    
    }

    @media (max-width: 1440px) {
        position: fixed;
        top: 40%;
        right: 40px;
        width: 25%;
    }

    @media (max-width: 768px) {
        position: relative;
        bottom: 1185px;
        left: 3%;
        width: 96%;
    }

    @media (max-width: 426px) {
        display: flex;
        flex-direction: column;
        width: 90%;
        bottom: 2970px;
        left:6%;
    }
`
export const Subcontainer = styled.article`
border-radius: 5px;
background-color: white;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
display: grid;
grid-template-columns: 3fr 1fr; /* Crea dos columnas de igual ancho */
padding: 10px;
    p{
        margin-bottom: 10px;
    }
`

export const Column = styled.div`
justify-self: end;
grid-row-gap: 1em;
`