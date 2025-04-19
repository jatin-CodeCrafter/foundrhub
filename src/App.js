import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    await axios.post('/signup', { userId, password });
    alert('User signed up!');
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
  console.log('User ID:', userId);
}

export default Signup;

