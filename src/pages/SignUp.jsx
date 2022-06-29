import classes from './SignUp.module.css'
import SignUpForm from './../components/signForm/SignUpForm';

const SignUp = () => {
    return ( 
        <div className={classes.container}>
            <SignUpForm/>
        </div>
     );
}
 
export default SignUp;