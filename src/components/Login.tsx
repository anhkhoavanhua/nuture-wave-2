import React, { useState } from 'react';
import '../styles/Login.css';
import { login } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const navigate = useNavigate(); // ✅ Hook để chuyển trang

  // Xử lý đăng nhập
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage('⚠️ Vui lòng nhập đầy đủ thông tin.');
      setTimeout(() => setErrorMessage(null), 3000);
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('❌ Mật khẩu không hợp lệ. Vui lòng thử lại.');
      setTimeout(() => setErrorMessage(null), 3000);
      return;
    }

    try {
      // ✅ Gọi API từ file `authApi.ts`
      const data = await login({ username, password });

      console.log('Login success:', data);

      // ✅ Hiển thị thông báo thành công
      setSuccessMessage('🎉 Đăng nhập thành công!');
      setTimeout(() => setSuccessMessage(null), 3000);

      // ✅ Lưu token vào localStorage
      localStorage.setItem('token', data.token);

      // ✅ CHUYỂN TRANG sau khi login thành công
      navigate('/dashboard');

    } catch (error) {
      setErrorMessage(`❌ Đăng nhập thất bại: ${(error as Error).message}`);
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <img src="/logo.svg" alt="Logo" />
        </div>

        <h2 className="login-title">CMS Login</h2>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username or email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


