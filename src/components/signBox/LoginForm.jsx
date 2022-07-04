import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { SignContext } from './SignContext';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";

const LoginForm = (props) => {
  const { switchToSignUp } = useContext(SignContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="ایمیل" />
        <Input type="password" placeholder="رمز عبور" />
      </FormContainer>
      <SubmitButton className="my-3" type="submit">
        ورود به حساب کاربری
      </SubmitButton>
      <MutedLink className="mb-2" href="#">
        رمز عبور خود را فراموش کرده‌اید؟
      </MutedLink>
      <MutedLink href="#">
        اکانت ویگل ندارید؟ <BoldLink href="#" onClick={switchToSignUp}>!ثبت نام کنید</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default LoginForm;
