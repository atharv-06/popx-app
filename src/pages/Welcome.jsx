import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <h2>Welcome to PopX</h2>
      <p style={{ color: '#777' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/signup" style={{
        display: 'block',
        backgroundColor: '#6c33ff',
        color: 'white',
        padding: '12px',
        textAlign: 'center',
        borderRadius: 6,
        fontWeight: 'bold',
        textDecoration: 'none',
        marginBottom: 15
      }}>
        Create Account
      </Link>
      <Link to="/login" style={{
        display: 'block',
        backgroundColor: '#c6bffd',
        color: '#333',
        padding: '12px',
        textAlign: 'center',
        borderRadius: 6,
        fontWeight: 'bold',
        textDecoration: 'none',
      }}>
        Already Registered? Login
      </Link>
    </div>
  );
}