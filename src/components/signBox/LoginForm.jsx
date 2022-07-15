import { useContext, useState } from "react";
import { SignContext } from "./SignContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc  } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = (props) => {
	const [data, setData] = useState({
		email: "",
		password: "",
		error: null,
		loading: false,
	});
	const history = useHistory();
	const { email, password, error, loading } = data;
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setData({ ...data, error: null, loading: true });
		if (!email || !password) {
			setData({ ...data, error: "All fields are required!" });
		}

		try {
			const result = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateDoc(doc(db, "users", result.user.uid), {
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

	const { switchToSignUp } = useContext(SignContext);
	return (
		<div className="FormBoxContainer">
			<form className="FormContainer" onSubmit={handleSubmit}>
				<input
					className="Input"
					name="email"
					value={email}
					onChange={handleChange}
					type="email"
					placeholder="ایمیل"
				/>
				<input
					className="Input"
					name="password"
					value={password}
					onChange={handleChange}
					type="password"
					placeholder="رمز عبور"
				/>
			<button className="SubmitButton my-3" type="submit" disabled={loading}>
				{loading? 'لطفا صبر کنید' : 'ورود به حساب کاربری'}
			</button>
			</form>
			<a className="MutedLink mb-2" href="#">
				رمز عبور خود را فراموش کرده‌اید؟
			</a>
			<a className="MutedLink" href="#">
				اکانت ویگل ندارید؟{" "}
				<a className="BoldLink" href="#" onClick={switchToSignUp}>
					!ثبت نام کنید
				</a>
			</a>
		</div>
	);
};

export default LoginForm;
