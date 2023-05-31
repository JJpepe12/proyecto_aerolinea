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

    @media (max-width: 1200px) {
        h2 {
        position: relative;
        top: 300px;
        }

        h4 {
        position: relative;
        top: 300px;
        }
        p {
        position: relative;
        top: 300px;
        }
    }
    @media (max-width: 768px) {
        h2 {
        position: relative;
        top: 380px;
        }

        h4 {
        position: relative;
        top: 380px;
        }
        p {
        position: relative;
        top: 380px;
        }
    }
    
    @media (max-width: 375px) {
    
        h2 {
        position: relative;
        top: 440px;
        }

        h4 {
        position: relative;
        top: 440px;
        }
        p {
        position: relative;
        top: 420px;
        }
    }
    `;

    export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 800px;

    @media (max-width: 1200px) {
        position: relative;
        top: -34px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        top: 428px;
    }

    @media (max-width: 375px) {
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

    @media (max-width: 375px) {
        margin-bottom: 20px;
        margin-left: -94px;
        position: relative;
        top: -19px;
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
    border: 1px solid gray;
`;



export const SeatSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const ReferenSeat = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const Subtittle = styled.div`
  margin-bottom: 10px;
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