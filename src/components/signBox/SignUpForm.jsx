import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from 'react';
import { SignContext } from './SignContext';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";

const SignUpForm = (props) => {
    const { switchToSignIn } = useContext(SignContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="نام کاربری" />
        <Input type="email" placeholder="ایمیل" />
        <Input type="password" placeholder="رمز عبور" />
        <Input type="password" placeholder="تایید رمز عبور" />
      </FormContainer>
      <SubmitButton className="my-3" type="submit">
        ورود به حساب کاربری
      </SubmitButton>
      <MutedLink href="#">
        اکانت ویگل دارید؟ <BoldLink href="#" onClick={switchToSignIn}>وارد شوید!</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default SignUpForm;
