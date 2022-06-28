import "./SignIn.css";
import SignInForm from "../components/signIn-logIn-form/SignInForm";
import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "../styles/useDarkMode";
import { Toggle } from "../components/UI/Toggle";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/globalStyles";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SignNav = styled.div`
width: 100vw;
height: 13vh;
display: block;
`

function SignIn() {
  const [theme, toggleTheme] = useDarkMode();
const themeMode = theme ==='light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <SignNav className = 'SignNav'>
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
      </SignNav>
        
      <Container>
        <GlobalStyles />
        <SignInForm />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
