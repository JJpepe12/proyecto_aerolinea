import styled from "styled-components";

export const StylesCard = styled.article`
  cursor: pointer;
  display: inline-block;
  color: black;
  :active {
    filter: grayscale(100%);
  }
  :hover {
    opacity: 0.7;
  }
  figure {
    padding-left: 40px;

    img {
      width: 250px;
    }
  }
  .mobile {
    display: none;
  }
  .cardname {
    position: relative;
    top: -120px;
    left: 35%;
    width: 40%;
    h3 {
      display: flex;
      color: white;
      font-family: "Alata", sans-serif;
      font-weight: lighter;
      font-size: 1.6rem;
      :active {
        color: black;
        -webkit-text-stroke: 0.1px white;
      }
    }
  }

  @media (max-width: 376px) {
    .window1440 {
      display: none;
    }
    .mobile {
      display: inline-block;
      margin-left: -50px;
    }
    .image375 {
      display: inline-block;
      img {
        width: 330px;
      }
    }
    .cardnameMobile {
      position: relative;
      top: -90px;
      left: 40px;
      width: 35%;
      h3 {
      display: flex;
      color: white;
      font-family: "Alata", sans-serif;
      font-weight: lighter;
      font-size: 22px;
      }
    }
  }
`;
