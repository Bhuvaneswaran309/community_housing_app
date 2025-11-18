import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { setRole, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // TODO: replace with real API call to your backend or use AWS Cognito
    // Example fake login logic for demonstration
    if (!email || !password) return alert('Enter credentials');

    // Fake role detection (email based)
    let role = 'owner';
    if (email === 'admin@apt.com') role = 'admin';
    else if (email.endsWith('@rent.com')) role = 'renter';

    setUser({ email });
    setRole(role);

    if (role === 'admin') navigate('/admin');
    else navigate('/home');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
      <Card style={{ width: 420 }}>
        <CardContent>
          <Typography variant='h5' gutterBottom>Sign in</Typography>
          <TextField label='Email' fullWidth margin='normal' value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label='Password' fullWidth margin='normal' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <Button variant='contained' fullWidth onClick={handleLogin} style={{ marginTop: 16 }}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
