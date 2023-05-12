import styled from "styled-components";

export const StylesBanner = styled.section`
  padding: 3% 10%;
  position: relative;

  img {
    width: 60%;
  }
  article {
    position: absolute;
    width: 45%;
    background-color: white;
    height: 47%;
    top: 45%;
    right: 8%;
    padding: 20px;
    text-align: center;
    line-height: 1.3;
  }
  h2 {
    margin-top: 40px;
    text-align: center;
    padding: 2%;
  }
  p {
    padding: 3%;
  }

  @media (max-width: 376px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    text-align: center;
  
    img {
      width: 80%;
    }
    article {
      width: 100%;
      position: relative;
      right: 0%;
    }

    h2 {
      margin-top: 5px;
      padding: 3%;
    }
  }
`;
