import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useContext, useState } from "react";
import { SignContext } from "./SignContext";
import "./SignUp.css";

const SignUpForm = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    error: null,
    loading: false,
  });
  const { name, email, password, error, loading } = data;
  const { switchToSignIn } = useContext(SignContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password ) {
      setData({ ...data, error: "All fields are required!" });
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result.user);
    } catch (err) {}
  };

  return (
    <div className="FormBoxContainer">
      <form className="FormContainer" onSubmit={handleSubmit}>
        <input
          className="Input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="نام کاربری"
        />
        <input
          className="Input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="ایمیل"
        />
        <input
          className="Input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="رمز عبور"
        />
        {/* <input
          className="Input"
          type="password"
          name="confirmPass"
          value={confirmPass}
          onChange={handleChange}
          placeholder="تایید رمز عبور"
        /> */}
        {error ? <p className="error">{error}</p> : null}
        <button className="SubmitButton my-3">ورود به حساب کاربری</button>
      </form>
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
