import React from 'react';
import { Container, Typography } from '@mui/material';
import Users from './components/Users';

function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Social Media Analytics
      </Typography>
      <Users />
    </Container>
  );
}

export default App;