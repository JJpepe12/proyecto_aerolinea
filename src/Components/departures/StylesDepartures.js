import styled from "styled-components";

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
  width: 950px;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 800px;
    position: relative;
    top: 300px;
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

export const Container = styled.section`
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 1rem;
  width: 950px;
  background: white;
  margin-left: 3%;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 800px;
    position: relative;
    top: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 372px;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    top: 419px;
  }
`;

export const BackpackTable = styled.table`
  width: 100%;
  
  tr {
    display: flex;
    gap: 15px;
    align-items: center;

    hr {
      height: 120px;
      width: 1px;
      color: rgb(238, 238, 238);
    }

    @media (max-width: 650px) {
    flex-direction: column;
    hr{
      display: none;
    }
    }

    @media (max-width: 375px) {
    flex-direction: column;
    top: 300px;
    
    hr{
      display: none;
    }
    }
  }
`;

export const Td = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 2px;

  img {
    margin: 1rem;
  }
`;

export const BackpackCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding: 15px 10px;
  text-align: center;
  border: 1px solid #ccc;
  align-items: center;
  border-radius: 8px;
  gap: 15px;

  &:hover {
    background-color: #9e1071;
    cursor: pointer;
    color: white;
    img {
      filter: invert(1);
    }
  }
`;