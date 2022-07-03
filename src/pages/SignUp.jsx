import classes from "./SignUp.module.css";
import SignUpForm from "./../components/signForm/SignUpForm";
import { ThemeProvider } from "styled-components";
import { Toggle } from "../components/UI/Toggle";
import { useDarkMode } from "../styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/globalStyles";

const SignUp = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className={classes.container}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <SignUpForm />
      </div>
    </ThemeProvider>
  );
};

export default SignUp;
