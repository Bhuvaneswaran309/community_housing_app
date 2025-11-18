import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // TODO: call backend or Cognito to register
    console.log({ name, email });
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
      <Card style={{ width: 420 }}>
        <CardContent>
          <Typography variant='h5'>Signup</Typography>
          <TextField label='Full name' fullWidth margin='normal' value={name} onChange={e => setName(e.target.value)} />
          <TextField label='Email' fullWidth margin='normal' value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label='Password' type='password' fullWidth margin='normal' value={password} onChange={e => setPassword(e.target.value)} />
          <Button variant='contained' fullWidth style={{ marginTop: 12 }} onClick={handleSignup}>Create account</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
