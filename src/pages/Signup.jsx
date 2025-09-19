import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup({ onSignup }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    company: 'Marry Doe',
    isAgency: 'yes'
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleRadioChange(e) {
    setForm(prev => ({ ...prev, isAgency: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // You can do validation or send data to backend here
    onSignup(form);
    navigate('/account');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create your<br /> PopX account</h3>

      <label style={{ color: '#6c33ff', fontSize: 12 }}>
        Full Name<span style={{ color: 'red' }}>*</span><br />
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          type="text"
          style={inputStyle}
          required
        />
      </label>

      <label style={{ color: '#6c33ff', fontSize: 12, marginTop: 15, display: 'block' }}>
        Phone number<span style={{ color: 'red' }}>*</span><br />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="text"
          style={inputStyle}
          required
        />
      </label>

      <label style={{ color: '#6c33ff', fontSize: 12, marginTop: 15, display: 'block' }}>
        Email address<span style={{ color: 'red' }}>*</span><br />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          style={inputStyle}
          required
        />
      </label>

      <label style={{ color: '#6c33ff', fontSize: 12, marginTop: 15, display: 'block' }}>
        Password <span style={{ color: 'red' }}>*</span><br />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          style={inputStyle}
          required
        />
      </label>

      <label style={{ color: '#6c33ff', fontSize: 12, marginTop: 15, display: 'block' }}>
        Company name<br />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          type="text"
          style={inputStyle}
        />
      </label>

      <div style={{ marginTop: 15, fontSize: 12 }}>
        Are you an Agency?<span style={{ color: 'red' }}>*</span><br />
        <label>
          <input
            type="radio"
            value="yes"
            checked={form.isAgency === 'yes'}
            onChange={handleRadioChange}
          /> Yes
        </label>
        <label style={{ marginLeft: 15 }}>
          <input
            type="radio"
            value="no"
            checked={form.isAgency === 'no'}
            onChange={handleRadioChange}
          /> No
        </label>
      </div>

      <button type="submit" style={buttonStyle}>Create Account</button>
    </form>
  );
}

const inputStyle = {
  width: '100%',
  padding: 8,
  marginTop: 5,
  borderRadius: 6,
  border: '1px solid #ddd',
  fontSize: 14
};

const buttonStyle = {
  marginTop: 30,
  width: '100%',
  backgroundColor: '#6c33ff',
  color: 'white',
  fontWeight: 'bold',
  padding: '12px',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer'
};