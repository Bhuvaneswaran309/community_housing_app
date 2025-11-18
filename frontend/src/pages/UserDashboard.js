import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const cards = [
    { title: 'Dashboard', link: '/home' },
    { title: 'Bills', link: '/bills' },
    { title: 'Complaints', link: '/complaints' }
  ];

  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(51,91,255,1) 0%, rgba(62,169,245,1) 100%)',
      minHeight: '100vh',
      color: '#fff'
    }}>
      <AppBar position='static' sx={{ background: '#2d5be3' }}>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>Community Housing</Typography>
          <Button color='inherit' onClick={() => navigate('/')}>Logout</Button>
        </Toolbar>
      </AppBar>

      <div style={{ padding: 40 }}>
        <Typography variant='h3' gutterBottom>Welcome to Community</Typography>
        <Grid container spacing={4}>
          {cards.map((c, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card onClick={() => navigate(c.link)} sx={{ cursor: 'pointer' }}>
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography variant='h6'>{c.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default UserDashboard;
