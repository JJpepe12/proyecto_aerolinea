import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Lato', sans-serif;
}

h2 {
  font-size: 1rem;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: var(--very-dark-gray);
}

button {
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  border: 0;
  color: white;
  cursor: pointer;
}

  @media (max-width: 1536px) {
    img {
    max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    img {
    max-width: 80%;
    }
  }

  @media (max-width: 375px) {
    img {
    max-width: 60%;
    }
  }
`;

export default GlobalStyles;
