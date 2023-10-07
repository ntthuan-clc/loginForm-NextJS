import React, { useState } from 'react';

function LoginForm({ onLogin, onRegister }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin({ username, password });
    } else {
      onRegister({ username, password });
    }
  };

  return (
    <div>
      <h1>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">{isLogin ? 'Đăng nhập' : 'Đăng ký'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Chuyển sang đăng ký' : 'Chuyển sang đăng nhập'}
      </button>
    </div>
  );
}

export default LoginForm;
