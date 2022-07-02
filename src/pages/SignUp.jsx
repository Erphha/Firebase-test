import classes from './SignUp.module.css'
import SignUpForm from './../components/signForm/SignUpForm';
import {Toggle} from '../components/UI/Toggle'
import {useDarkMode} from '../styles/useDarkMode'
import { GlobalStyles } from '../styles/globalStyles';

const SignUp = () => {

    const [theme, toggleTheme] = useDarkMode()

    return ( 
        <div className={classes.container}>
            <GlobalStyles/>
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
            <SignUpForm/>
        </div>
     );
}
 
export default SignUp;