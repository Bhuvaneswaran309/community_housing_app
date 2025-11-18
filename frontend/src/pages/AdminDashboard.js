import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const cards = [
    { title: 'Manage Users', link: '/admin/users' },
    { title: 'Manage Bills', link: '/admin/bills' },
    { title: 'Manage Complaints', link: '/admin/complaints' }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <AppBar position='static' sx={{ background: '#2d5be3' }}>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>Admin - Community</Typography>
          <Button color='inherit' onClick={() => navigate('/')}>Logout</Button>
        </Toolbar>
      </AppBar>

      <div style={{ padding: 24 }}>
        <Typography variant='h4' gutterBottom>Admin Panel</Typography>
        <Grid container spacing={3}>
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

export default AdminDashboard;
