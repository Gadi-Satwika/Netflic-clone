import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { signIn } from '../api/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect to home if already authenticated
  useEffect(() => {
    const token = Cookies.get('jwt_token');
    if (token) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await signIn(email, password);
      
      // Spec: Extract the token from the response (jwt_token, token, jwtToken, or nested data.token)
      const token = response.token || 
                    response.jwt_token || 
                    response.jwtToken || 
                    (response.data && response.data.token);

      if (!token) {
        throw new Error('Authentication token not found in the response.');
      }

      // Spec: Store it in a cookie named jwt_token (expires in 7 days) using js-cookie
      Cookies.set('jwt_token', token, { expires: 7 });

      // Redirect to Home
      navigate('/');
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="brand-panel">
        <div className="brand-content">
          <h1 className="brand-logo">NXTFLIX</h1>
          <p className="brand-tagline">
            Unlimited movies, shows and more. Watch anywhere. Cancel anytime.
          </p>
        </div>
      </div>
      <div className="form-panel">
        <div className="form-container">
          <h2 className="form-title">Sign In</h2>
          
          {error && (
            <div className="error-banner" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            <button 
              type="submit" 
              className="signin-button" 
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
