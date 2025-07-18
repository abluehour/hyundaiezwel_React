import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 처리 로직
    if(username === 'abcd' && password === '1234') {
      alert(`로그인 성공: ${username}`);
    }else {
      alert('로그인 실패: 사용자 이름 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <p>ID: <input
        type="text"
        placeholder="사용자 이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /></p>
      <p>PW: <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /></p>
      <button onClick={handleLogin} style={{margin: '10px'}}>로그인</button>
    </div>
  );
};

export default Login;
