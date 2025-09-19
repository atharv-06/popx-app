import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.length > 0 && password.length > 0;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    // Placeholder login logic
    onLogin({ email });
    navigate('/account');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Signin to your<br /> PopX account</h3>
      <p style={{ color: '#777' }}>
        Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
      </p>

      <label style={{ color: '#6c33ff', fontSize: 12, display: 'block', marginBottom: 6 }}>
        Email Address
      </label>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={inputStyle}
      />

      <label style={{ color: '#6c33ff', fontSize: 12, display: 'block', marginTop: 15, marginBottom: 6 }}>
        Password
      </label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={inputStyle}
      />

      <button type="submit" disabled={!isValid} style={{ ...buttonStyle, backgroundColor: isValid ? '#999' : '#ccc', cursor: isValid ? 'pointer' : 'not-allowed' }}>
        Login
      </button>
    </form>
  );
}

const inputStyle = {
  width: '100%',
  padding: 8,
  borderRadius: 6,
  border: '1px solid #ddd',
  fontSize: 14,
  marginTop: 2
};

const buttonStyle = {
  marginTop: 30,
  width: '100%',
  backgroundColor: '#999',
  color: 'white',
  fontWeight: 'bold',
  padding: '12px',
  borderRadius: 6,
  border: 'none'
};