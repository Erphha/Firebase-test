import "./SignIn.css";
import SignInForm from "../components/signIn-logIn-form/SignInForm";
import { useSelector, useDispatch } from "react-redux";
import ReactSwitch from "react-switch";


function SignIn() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.lightTheme);
  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };
  return (
    <div className="SignInPage" id={lightTheme === true ? "light" : "dark"}>
      <SignInForm />
      <div className="switch">
        <label> {lightTheme === true ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={lightTheme === false} />
      </div>
    </div>
  );
}

export default SignIn;
