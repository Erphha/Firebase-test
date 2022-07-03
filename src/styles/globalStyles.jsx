import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    background: ${({ theme }) => theme.background};
    transition: all 0.5s linear;
}
.main {
    background-color: ${({ theme }) => theme.cardBackground};
  }
  .sign{
    color: ${({ theme }) => theme.text}
  }
  .username,.email,.password{
    color: ${({ theme }) => theme.inputColor};
  background: ${({ theme }) => theme.inputBackgroundColor};
  }
  .SignNav{
    background: ${({ theme }) => theme.navBackgroundColor}
  }
  
`;

export const lightTheme = {
  background: "#f3ebf6",
  cardBackground: "#fff;",
  text: "#8c55aa",
  inputColor: 'rgb(38, 50, 56)',
  inputBackgroundColor: 'rgba(136, 126, 126, 0.04)',
  navBackgroundColor: '#8c55aa'
};

export const darkTheme = {
  background: "#373A40",
  cardBackground: "#909296",
  text: "#fff",
  inputColor: 'rgb(254, 255, 255)',
  inputBackgroundColor: 'rgba(255, 247, 247, 0.299)',
  navBackgroundColor: '#373A40'
};