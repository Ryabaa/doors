import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    user-select: none;
    scroll-behavior: smooth;
    font-family: 'Comfortaa', cursive;
    font-size: 14px;
    font-weight: normal;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    border: 0;
    padding: 0;
    margin: 0;
}

button {
    cursor: pointer;
}
`;
