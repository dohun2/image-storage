import styled from 'styled-components';
import Color from '../utils/color';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { useCallback, useRef } from 'react';
import axios from 'axios';
import API from '../utils/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        emailRef.current.focus();
        return;
      }
      if (!password) {
        passwordRef.current.focus();
        return;
      }
      axios
        .post(API.Login, {
          email,
          password,
        })
        .then((response) => {
          console.log(response);
          setEmail('');
          setPassword('');
          navigate('/home');
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    [email, password, setEmail, setPassword, navigate],
  );
  return (
    <div id="container">
      <Header>Image Storage</Header>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="email">
          <span>이메일</span>
          <div>
            <Input ref={emailRef} value={email} onChange={onChangeEmail} type="email" id="email" name="email" />
          </div>
        </Label>
        <Label htmlFor="id">
          <span>비밀번호</span>
          <div>
            <Input
              ref={passwordRef}
              value={password}
              onChange={onChangePassword}
              type="password"
              id="password"
              name="password"
            />
          </div>
        </Label>
        <Button>로그인</Button>
        {!email ? <Error>이메일이 입력되지 않았습니다.</Error> : null}
        {!password ? <Error>비밀번호가 입력되지 않았습니다.</Error> : null}
        <TextLink to={'/signup'}>회원가입 하러가기</TextLink>
      </Form>
    </div>
  );
};

const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  /* font-family: 'Jua', sans-serif; */
  font-family: 'Yeon Sung', cursive;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Form = styled.form`
  border-radius: 5px;
  border: none;
  margin: 0 auto;
  width: 20rem;
  max-width: 20rem;
  /* background-color: ${Color[400]}; */
  /* padding: 20px; */
`;

const Label = styled.label`
  margin-bottom: 0.3rem;
  & > span {
    color: ${Color[900]};
    display: block;
    text-align: left;
    padding-bottom: 0.3rem;
    font-size: 1rem;
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
  margin: 0 0 1rem;
  width: 100%;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-bottom: 0.7rem;
  width: 100%;
  max-width: 100%;
  color: white;
  background-color: ${Color[600]};
  border: none;
  font-size: 1.2rem;
  font-weight: 900;
  height: 3rem;
  min-width: 5rem;
  padding: 0 1rem 0.2rem;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0.1rem 0.25rem;
  &:hover {
    background-color: ${Color[800]};
    border: none;
  }
  &:focus {
    background-color: ${Color[800]};
    box-shadow: 0 0 0 0.4rem;
  }
`;

const Error = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: red;
  margin-left: 0.1rem;
  margin-bottom: 0.3rem;
`;

const TextLink = styled(Link)`
  font-size: 0.8rem;
  color: ${Color[500]};
  &:hover {
    color: ${Color[900]};
  }
  &:focus {
    color: ${Color[900]};
  }
`;

export default SignUp;
