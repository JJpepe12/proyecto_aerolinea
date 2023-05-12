import styled from "styled-components";

export const StylesNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px 0;
  cursor: pointer;
  .logo {
    margin-left: -22px;
  }
  @media screen and (max-width: 376px) {
    padding: 40px 20;
    flex-direction: column;
    background-color: ${(props) => (props.viewOption ? "black" : "inherit")};
    margin-left: -77px;
  }
  .logo {
    margin-left: -40px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  align-items: center;
  color: white;
  font-size: 18px;
  text-align: right;
  li {
    ::after {
      content: "";
      height: 2px;
      width: 0;
      background-color: white;
      display: block;
      transition: all 300ms;
      display: flex;
      margin: auto;
      margin-top: 5px;
      font-family: "Josefin Sans", sans-serif;
    }

    :hover::after {
      width: 20px;
    }
  }

  @media screen and (max-width: 376px) {
    //Evaluar si viewoption es true se aplica flex y si es false se aplica none
    //https://styled-components.com/docs/basics#adapting-based-on-props
    display: ${(props) => (props.viewOption ? "flex" : "none")};
    flex-direction: column;
    height: 98vh;
    font-family: "Josefin Sans", sans-serif;
    font-size: 2rem;
    font-weight: 300;
    margin: 80px;
    margin-left: -40px;
    text-align: left;
  }
`;

export const IconHamburger = styled.figure`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
    color: white;
    font-size: 1rem;
    position: absolute;
    right: 0;
  }
  .hamburguesa {
    position: relative;
    left: -20px;
    top: 2px;
  }
`;
