import styled from "styled-components";
import imageAvion from "../../assets/avion.webp";

export const StyledButton = styled.div`
  background-color: #80206a;
  border-radius: 25px;
  width: 28rem;
  color: white;
`;

export const Figure = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${imageAvion});
  min-height: 300px;
  min-width: 300px;
  width: 890px;
  height: 85vh;
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  margin-left: 350px;
  margin-top: 70px;
`;

export const Formulario = styled.section`
  position: absolute;
  margin-top: -535px;
  margin-left: 150px;
  width: 33rem;
`;

export const Viajes = styled.div`
  margin-left: 11px;
`;
export const TextDecoration = styled.div`
  color: white;
`;
export const TextDecorationButton = styled.div`
  color: black;
  &:hover {
    background-color: #80206a;
    color: white;
  }
`;

export const Pasajeros = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-left: 20px;
  margin-top: -25px;
  .centered-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% 0 0 5%;
}
`;
export const Adultos = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  padding: 0;
`;
export const Niños = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
`;
export const Bebes = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
`;

