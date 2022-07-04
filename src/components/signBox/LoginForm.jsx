import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { SignContext } from './SignContext';
import './LoginForm.css'

const LoginForm = (props) => {
  const { switchToSignUp } = useContext(SignContext);
  return (
    <div className="FormBoxContainer">
      <form className='FormContainer'>
        <input className='Input' type="email" placeholder="ایمیل" />
        <input className='Input' type="password" placeholder="رمز عبور" />
      </form>
      <button className="SubmitButton my-3" type="submit">
        ورود به حساب کاربری
      </button>
      <a className="MutedLink mb-2" href="#">
        رمز عبور خود را فراموش کرده‌اید؟
      </a>
      <a className='MutedLink' href="#">
        اکانت ویگل ندارید؟ <a className="BoldLink" href="#" onClick={switchToSignUp}>!ثبت نام کنید</a>
      </a>
    </div>
  );
};

export default LoginForm;
