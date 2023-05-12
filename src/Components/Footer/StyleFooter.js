import styled from "styled-components";

export const StylesFooter = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 50%;
  background-color: black;
  padding: 2%;
  .copyright {
    text-align: left;
    text-align: center;

    p {
      color: #7f7f7f;
      font-size: 14px;
      font-family: "Alata", sans-serif;
      margin-left: -127px;
      margin-top: 14px;
    }
  }
  .contenedor_2 {
    padding-top: -5px;
    align-items: center;
    column-count: 1;
  }
  .Social_networks button img {
    width: 20px;
  }
  .Logo img {
    width: 140px;
    margin-left: 100px;
  }
  .Link {
    display: flex;
    gap: 30px;
    margin-left: 100px;
    margin-top: 20px;
  }
  a {
    list-style: none;
    font-size: 14px;
    gap: 30px;
    color: white;
    font-family: "Alata", sans-serif;
    cursor: pointer;
  }
  a::after {
    content: "";
    height: 2px;
    width: 0;
    background-color: white;
    display: block;
    transition: all 300ms;
    display: flex;
    margin: auto;
    margin-top: 5px;
  }

  a:hover::after {
    width: 20px;
  }

  .Social_networks {
    display: flex;
    margin-left: 5px;
    gap: 15px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    button::after {
      content: "";
      height: 2px;
      width: 0;
      background-color: white;
      display: block;
      transition: all 300ms;
      display: flex;
      margin: auto;
      margin-top: 5px;
    }

    button:hover::after {
      width: 20px;
    }
  }

  @media (max-width: 376px) {
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
  }
`;
