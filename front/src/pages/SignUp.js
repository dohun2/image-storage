import styled from 'styled-components';
import Color from '../utils/color';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { useCallback } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  return (
    <div id="container">
      <Header>Image Storage</Header>
      <Form>
        <Label htmlFor="email">
          <span>이메일 주소</span>
          <div>
            <Input value={email} onChange={onChangeEmail} type="email" id="email" name="email" />
          </div>
        </Label>
        <Label htmlFor="id">
          <span>아이디</span>
          <div>
            <Input value={id} onChange={onChangeId} type="text" id="id" name="id" />
          </div>
        </Label>
        <Label htmlFor="id">
          <span>비밀번호</span>
          <div>
            <Input value={password} onChange={onChangePassword} type="password" id="password" name="password" />
          </div>
        </Label>
        <Label htmlFor="id">
          <span>비밀번호 확인</span>
          <div>
            <Input
              value={passwordCheck}
              onChange={onChangePasswordCheck}
              type="password"
              id="password-check"
              name="password-check"
            />
          </div>
        </Label>
        <Button>회원가입</Button>
        <TextLink to={'/login'}>로그인 하러가기</TextLink>
      </Form>
    </div>
  );
};

const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  /* font-family: 'Jua', sans-serif; */
  font-family: 'Yeon Sung', cursive;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Form = styled.form`
  border-radius: 5px;
  border: none;
  margin: 0 auto;
  width: 300px;
  max-width: 500px;
  /* background-color: ${Color[400]}; */
  /* padding: 20px; */
  /* padding-left: 100px; */
  /* padding-right: 100px; */
`;

const Label = styled.label`
  margin-bottom: 5px;
  & > span {
    color: ${Color[900]};
    display: block;
    text-align: left;
    padding-bottom: 5px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.5;
    font-weight: 600;
  }
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid black;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 15px;
`;

const Button = styled.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: white;
  background-color: ${Color[600]};
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 1px 4px;
  &:hover {
    background-color: ${Color[800]};
    border: none;
  }
  &:focus {
    background-color: ${Color[800]};
    box-shadow: 0 0 0 5px;
  }
`;

const TextLink = styled(Link)`
  font-size: 13px;
  color: ${Color[500]};
  &:hover {
    color: ${Color[900]};
  }
  &:focus {
    color: ${Color[900]};
  }
`;

export default SignUp;
