import styled from "styled-components";

// Estilos de Departures
export const Date = styled.section`
    margin-bottom: 1rem;
    padding-left: 3%;

    h1 {
        margin-bottom: 1rem;
        font-weight: bold;
    }
    h2 {
        margin-bottom: 0.5rem;
    }
    h4 {
        color: rgb(150, 150, 150);
        margin-bottom: 2rem;
    }
    p {
        font-weight: bold;
        margin-bottom: 1rem;
    }

    @media (max-width: 1024px) {
        h1 {
        position: relative;
        top: -285px;
        }
        p {
        position: relative;
        top: -20px;
        }
    }
    @media (max-width: 768px) {
        h1 {
        position: relative;
        top: 50px;
        }

        h2, h4 {
        position: relative;
        top: 410px;
        }
        p {
        position: relative;
        top: 350px;
        }
    }

    @media (max-width: 426px) {
        h2, h4 {
        position: relative;
        top: 440px;
        }
        p {
        position: relative;
        top: 350px;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 950px;

    @media (max-width: 1024px) {
        width: 65%;
        max-width: 800px;
        position: relative;
        top: 15px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        top: 428px;
        right: 7px;
    }

    @media (max-width: 426px) {
        top: 470px;
    }

    .btn__change{
    border-radius: 15px;
    border: 1px solid #9e1071;
    background-color: transparent;
    padding: 10px 16px;
    margin-top: 1rem;
    margin-left: auto;
    font-size: 16px;
    font-weight: bold;
    width: 180px;
    color: #9e1071;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #9e1071;
        cursor: pointer;
        color: white;
    }

    @media (max-width: 768px) {
        margin-bottom: 20px;
        left: -10px;
        position: relative;
        top: 55px;
    }
    @media (max-width: 426px) {
        margin-bottom: 20px;
        left: -10px;
        position: relative;
        top: 75px;
        z-index: 2;
    }
    }
`;

// Nuevos estilos SeatDepartures

export const Marks = styled.div`
    height: 50px;
    width: 50px;
    color: black;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 15px 19px;
    border: 0.1px solid gray;
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 7px;
`;

export const Text = styled.div`
    margin-bottom: 15px;

    @media (max-width: 1024;) {
        left: -183px;
        text-align: center;
        position: relative;
    }
`;

export const SeatSelect = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 7px;
    .occupied{
    background-color: white;
    border: 2px solid #9e1071;
    color: grey;
    &:hover{
        color: #fff;
        background-color: white;
        cursor: not-allowed;
    }
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
`;

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    #void{
        background-color: #f0f0f0;
        z-index: -5;
    }
`;

export const Button = styled.button`
    height: 50px;
    width: 50px;
    background-color: #b9b9b9;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        background-color: #9e1071;
    }
`;
