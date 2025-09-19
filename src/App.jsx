import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AccountSettings from './pages/Account';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div style={{ maxWidth: 400, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup onSignup={setUser} />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/account" element={<AccountSettings user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;