import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Typography } from '@mui/material';

const Bills = () => {
  const bills = [
    { id: 1, month: 'Oct', amount: 120, status: 'Paid' },
    { id: 2, month: 'Nov', amount: 130, status: 'Unpaid' }
  ];

  return (
    <div style={{ padding: 24 }}>
      <Typography variant='h4' gutterBottom>Bills</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Month</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map(b => (
              <TableRow key={b.id}>
                <TableCell>{b.id}</TableCell>
                <TableCell>{b.month}</TableCell>
                <TableCell>{b.amount}</TableCell>
                <TableCell>{b.status}</TableCell>
                <TableCell>{b.status === 'Unpaid' && <Button variant='contained' size='small'>Pay</Button>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Bills;
