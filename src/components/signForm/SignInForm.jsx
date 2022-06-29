import React from "react";
import classes from './SignInForm.module.css'
import SubmitButton from "../UI/SubmitButton";

function SignInForm() {
  return (
    <div className={classes.main}>
      <p className={classes.sign} align="center">
        ورود به ویگل!
      </p>
      <form className={classes.form1}>
        <input className={classes.username} type="text" placeholder="نام کاربری" />
        <input className={classes.password} type="password" placeholder="رمز عبور" />
        <SubmitButton  type="submit">ورود به حساب کاربری</SubmitButton>
        <p className={classes.forgot} align="center">
          <a href="#">رمز عبور را فراموش کرده‌اید؟ </a>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
