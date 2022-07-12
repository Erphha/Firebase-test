import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { SignContext } from "./SignContext";
import "./SignUp.css";

const SignUpForm = (props) => {
	const [data, setData]= useState({
		name: '',
		email: '',
		password: '',
		confirmPass: '',
		error: null,
		loading: false
	})
	const {name,email, password,confirmPass,error,loading} = data;
	const { switchToSignIn } = useContext(SignContext);

		const handleChange =(e)=>{
			setData(prevData=>({...prevData,[e.target.name]:e.target.value}));
		};

		const handleSubmit= async(e)=>{
			e.preventDefault();
      if(!name || !email || !password || !confirmPass){
        setData({...data, error:"All fields are required!"})
      }
			console.log(data);
		}


	return (
		<div className="FormBoxContainer">
			<form className="FormContainer" onSubmit={handleSubmit}>
				<input className="Input" type="text" defaultValue={name} onChange={handleChange} placeholder="نام کاربری" />
				<input className="Input" type="email" defaultValue={email} onChange={handleChange} placeholder="ایمیل" />
				<input className="Input" type="password" defaultValue={password} onChange={handleChange} placeholder="رمز عبور" />
				<input className="Input" type="password" defaultValue={confirmPass} onChange={handleChange} placeholder="تایید رمز عبور" />
        {error? <p className='error'>{error}</p>:null}
			<button className="SubmitButton my-3" type="submit">
				ورود به حساب کاربری
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
