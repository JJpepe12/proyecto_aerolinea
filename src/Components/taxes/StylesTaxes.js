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

    @media (max-width: 1200px) {
    position: relative;
    top: -1171px;
    left: -1px;
    width: 29%;
    }

    @media (max-width: 768px) {
        position: relative;
        top: -1364px;
        left: -1px;
        width: 100%;
    }

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        top: -3176px;
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