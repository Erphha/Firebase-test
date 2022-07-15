import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useContext, useState } from "react";
import { SignContext } from "./SignContext";
import "./SignUp.css";
import { useHistory } from "react-router-dom";

const SignUpForm = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    error: null,
    loading: false,
  });
  const history = useHistory();
  const { name, email, password, error, loading } = data;
  const { switchToSignIn } = useContext(SignContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required!" });
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      history.replace("/");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
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
        <button className="SubmitButton my-3" disabled={loading}>
        {loading?'لطفا صبر کنید':'ساختن حساب کاربری'}
        </button>
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
