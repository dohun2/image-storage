import { useState } from 'react';

const Login = () => {
  const [info, setInfo] = useState({ name: '', password: '' });

  const login = () => {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: info.name,
        password: info.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setInfo({ ...info, name: e.target.value });
        }}
        type="text"
        name="id"
        placeholder="ID"
        value={info.name}
      />
      <input
        onChange={(e) => {
          setInfo({ ...info, password: e.target.value });
        }}
        type="text"
        name="password"
        placeholder="Password"
        value={info.password}
      />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default Login;
