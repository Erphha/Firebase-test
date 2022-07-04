import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
&:hover{color: rgba(200, 200, 200, 0.8);}
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(155, 89, 182);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 43px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all, 100ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(155, 89, 182);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 10%;
  color: #fff;
  text-align: center;
  margin: auto;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(155, 89, 182);
  background: linear-gradient(
    54deg,
    rgba(155, 89, 182, 1) 12%,
    rgba(126, 20, 218, 1) 94%
  );

  &:hover {
    filter: brightness(1.2);
  }
`;
