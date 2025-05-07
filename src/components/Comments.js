import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
// import axios from 'axios';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data
    setTimeout(() => {
      const mockComments = {
        p1: [{ id: 'c1', content: 'Nice post!' }],
        p2: [{ id: 'c2', content: 'Interesting thoughts.' }],
        p3: [{ id: 'c3', content: 'Thanks for sharing!' }],
      };
      setComments(mockComments[postId] || []);
      setLoading(false);
    }, 1000);

    // Uncomment for actual API:
    /*
    axios.get(`http://20.244.56.144/evaluation-service/posts/${postId}/comments`)
      .then((res) => {
        setComments(res.data.comments || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    */
  }, [postId]);

  if (loading) return <CircularProgress size={15} sx={{ ml: 2 }} />;

  return (
    <Box sx={{ pl: 2, mt: 1 }}>
      <Typography variant="subtitle2">Comments:</Typography>
      {comments.map((c) => (
        <Typography key={c.id} variant="body2" sx={{ pl: 1 }}>
          • {c.content}
        </Typography>
      ))}
    </Box>
  );
}

export default Comments;
