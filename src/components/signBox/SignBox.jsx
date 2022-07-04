import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import { useState } from "react";
import { SignContext } from './SignContext';
import SignUpForm from './SignUpForm';
import './SignBox.css';


const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(10deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(-60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const SignBox = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState('signIn');

  const expandingAnimationHandler = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignUp=() => {
    expandingAnimationHandler();
    setTimeout(() => {
        setActive('signUp');
    }, 400)
    
  }
  const switchToSignIn=() => {
    expandingAnimationHandler();
    setTimeout(() => {
        setActive('signIn');
    }, 400)
    
  }

  const contextValue = {switchToSignUp, switchToSignIn};

  return (
    <SignContext.Provider value={contextValue}>
        <div className="BoxContainer">
      <div className='TopContainer'>
        <motion.div className='BackDrop'
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        {active === 'signIn' && <div className="HeaderContainer">
          <h2 className='HeaderText'>به ویگل</h2>
          <h2 className='HeaderText'>خوش آمدید</h2>
          <h5 className='SmallText'>لطفا برای ادامه ابتدا وارد شوید!</h5>
        </div>}
        {active === 'signUp' && <div className="HeaderContainer">
          <h2 className='HeaderText'>در ویگل</h2>
          <h2 className='HeaderText'>ثبت نام کنید</h2>
          <h5 className='SmallText'>لطفا برای ادامه ابتدا ثبت نام کنید!</h5>
        </div>}
      </div>
      <div className='InnerContainer'>
        {active === 'signIn' && <LoginForm/>}
        {active === 'signUp' && <SignUpForm/>}
      </div>
    </div>
    </SignContext.Provider>
    
  );
};

export default SignBox;
