import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress, Grid } from '@mui/material';
// import axios from 'axios';
import Posts from './Posts';

function Users() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUsers({
      1: 'Test User'
    });
    setLoading(false);
  }, []);
  

    // Uncomment this to use actual API:
    /*
    axios.get('http://20.244.56.144/evaluation-service/users')
      .then((res) => {
        setUsers(res.data.users || {});
        setLoading(false);
      })
      .catch(() => setLoading(false));
    */
  

  if (loading) return <Typography>Loading...</Typography>;


  return (
    <Grid container spacing={2}>
      {Object.entries(users).map(([id, name]) => (
        <Grid item xs={12} key={id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{name}</Typography>
              <Posts userId={id} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Users;
