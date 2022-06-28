import React from "react";
import SubmitButton from "../UI/SubmitButton";

function SignInForm() {
  return (
    <div className="main">
      <p className="sign" align="center">
        ورود به ویگل!
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="نام کاربری" />
        <input className="email" type="email" placeholder="ایمیل" />
        <input className="password" type="password" placeholder="رمز عبور" />
        <SubmitButton  type="submit">ورود به حساب کاربری</SubmitButton>
        <p className="forgot" align="center">
          <a href="#">رمز عبور را فراموش کرده‌اید؟ </a>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
