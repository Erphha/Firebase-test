import classes from "./SignIn.module.css";
import SignInForm from "../components/signForm/SignInForm";

function SignIn() {
  return (
    <div className={classes.container}>
      <SignInForm />
    </div>
  );
}

export default SignIn;
