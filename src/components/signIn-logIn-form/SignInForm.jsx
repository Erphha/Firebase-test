import React from "react";

function SignInForm() {
  return (
    <div className="main">
      <p className="sign" align="center">
        در ویگل ثبت نام کنید
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="نام کاربری" />
        <input className="email" type="email" placeholder="ایمیل" />
        <input className="password" type="password" placeholder="رمز عبور" />
        <input className="password" type="password" placeholder="تایید رمز عبور" />
        <a className="submit" align="center">
          ثبت نام
        </a>
        <p className="forgot" align="center">
          <a href="#">رمز عبور را فراموش کرده‌اید؟ </a>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;