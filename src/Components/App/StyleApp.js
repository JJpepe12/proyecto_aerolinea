import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --dark-gray: hsl(0, 0%, 55%);
  --very-dark-gray: hsl(0, 0%, 41%);
}

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
  font-family: 'Josefin Sans', sans-serif;
  text-transform: uppercase;
}

h2 {
  font-size: 2rem;
}

p {
  font-family: 'Alata', sans-serif;
  font-size: 1rem;
  color: var(--very-dark-gray);
}

button {
  background-color: transparent;
  font-family: 'Alata', sans-serif;
  border: 0;
  color: white;
  cursor: pointer;
}
`;

export default GlobalStyles;
