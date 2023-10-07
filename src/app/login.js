import login from '../components/login';

function Login() {
  const handleLogin = (credentials) => {
    // Xử lý đăng nhập tại đây
  };

  const handleRegister = (credentials) => {
    // Xử lý đăng ký tại đây
  };

  return (
    <div>
      <h1>Login Page</h1>
      <login onLogin={handleLogin} onRegister={handleRegister} />
    </div>
  );
}

export default Login;
