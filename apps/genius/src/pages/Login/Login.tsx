import React, { useState } from 'react';
import * as LoginStyle from './LoginStyle';
import Navbar from '../Navbar/Navbar';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('로그인 성공:', { username, password });
    alert('로그인이 완료되었습니다!'); // alert 창을 통해 로그인 완료 메시지 표시
  };

  return (
    <LoginStyle.Container>
      <Navbar />
      <h1>로그인</h1>
      <LoginStyle.Form>
        <LoginStyle.Row>
          <LoginStyle.Label>아이디　</LoginStyle.Label>
          <LoginStyle.Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </LoginStyle.Row>
        <LoginStyle.Row>
          <LoginStyle.Label>비밀번호</LoginStyle.Label>
          <LoginStyle.Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LoginStyle.Row>
        <LoginStyle.FlexContainer>
          <LoginStyle.AutoLoginContainer>
            <input type="checkbox" id="autoLogin" />
            <LoginStyle.AutoLoginLabel htmlFor="autoLogin">자동 로그인</LoginStyle.AutoLoginLabel>
          </LoginStyle.AutoLoginContainer>
          <LoginStyle.ForgotPasswordContainer>
            <LoginStyle.ForgotPasswordLink>아이디/비밀번호 찾기</LoginStyle.ForgotPasswordLink>
          </LoginStyle.ForgotPasswordContainer>
        </LoginStyle.FlexContainer>
        <LoginStyle.Button type="button" onClick={handleLogin}>
          로그인
        </LoginStyle.Button>
      </LoginStyle.Form>
    </LoginStyle.Container>
  );
};

export default Login;
