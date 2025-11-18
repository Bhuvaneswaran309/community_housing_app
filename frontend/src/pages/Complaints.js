import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Typography } from '@mui/material';

const Complaints = () => {
  const complaints = [
    { id: 1, resident: 'John', issue: 'Leaking faucet', status: 'Pending' },
    { id: 2, resident: 'Jane', issue: 'Noise', status: 'Resolved' }
  ];

  return (
    <div style={{ padding: 24 }}>
      <Typography variant='h4' gutterBottom>Complaints</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Resident</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map(c => (
              <TableRow key={c.id}>
                <TableCell>{c.id}</TableCell>
                <TableCell>{c.resident}</TableCell>
                <TableCell>{c.issue}</TableCell>
                <TableCell>{c.status}</TableCell>
                <TableCell>{c.status === 'Pending' && <Button variant='contained' size='small'>Update</Button>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Complaints;
