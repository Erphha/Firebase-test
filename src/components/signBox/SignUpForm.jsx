import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { SignContext } from "./SignContext";
import "./SignUp.css";

const SignUpForm = (props) => {
  const { switchToSignIn } = useContext(SignContext);

  return (
    <div className="FormBoxContainer">
      <form className="FormContainer">
        <input className="Input" type="text" placeholder="نام کاربری" />
        <input className="Input" type="email" placeholder="ایمیل" />
        <input className="Input" type="password" placeholder="رمز عبور" />
        <input className="Input" type="password" placeholder="تایید رمز عبور" />
      </form>
      <button className="SubmitButton my-3" type="submit">
        ورود به حساب کاربری
      </button>
      <a className="MutedLink" href="#">
        اکانت ویگل دارید؟{" "}
        <a className="BoldLink" href="#" onClick={switchToSignIn}>
          وارد شوید!
        </a>
      </a>
    </div>
  );
};

export default SignUpForm;
