import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  } 
  body {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts};
  }
  a {
    text-decoration: none;
  }
`;
