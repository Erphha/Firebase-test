import styled from "styled-components";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import { useState } from "react";
import { SignContext } from './SignContext';
import SignUpForm from './SignUpForm';

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(-60deg);
  top: -300px;
  left: -70px;
  background: rgb(155, 89, 182);
  background: linear-gradient(
    54deg,
    rgba(155, 89, 182, 1) 12%,
    rgba(126, 20, 218, 1) 94%
  );
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.9;
  color: #fff;
  margin: 0;
  z-index: 10;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin-top: 5px;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

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

const AccountBox = () => {
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
        <BoxContainer>
      <TopContainer>
        <BackDrop
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        {active === 'signIn' && <HeaderContainer>
          <HeaderText>به ویگل</HeaderText>
          <HeaderText>خوش آمدید</HeaderText>
          <SmallText>لطفا برای ادامه ابتدا وارد شوید!</SmallText>
        </HeaderContainer>}
        {active === 'signUp' && <HeaderContainer>
          <HeaderText>در ویگل</HeaderText>
          <HeaderText>ثبت نام کنید</HeaderText>
          <SmallText>لطفا برای ادامه ابتدا ثبت نام کنید!</SmallText>
        </HeaderContainer>}
      </TopContainer>
      <InnerContainer>
        {active === 'signIn' && <LoginForm/>}
        {active === 'signUp' && <SignUpForm/>}
      </InnerContainer>
    </BoxContainer>
    </SignContext.Provider>
    
  );
};

export default AccountBox;
