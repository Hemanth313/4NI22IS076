import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, CircularProgress } from '@mui/material';
// import axios from 'axios';
import Comments from './Comments';

function Posts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockPosts = {
        1: [
          { id: 'p1', content: 'Alice’s first post' },
          { id: 'p2', content: 'Alice’s second post' },
        ],
        2: [
          { id: 'p3', content: 'Bob’s only post' },
        ],
      };
      setPosts(mockPosts[userId] || []);
      setLoading(false);
    }, 1000);
  }, [userId]);
  

  if (loading) return <Typography>Loading posts...</Typography>;


  return (
    <Box sx={{ mt: 2, pl: 2 }}>
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 1 }}>
          <CardContent>
            <Typography variant="body1">{post.content}</Typography>
            <Comments postId={post.id} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Posts;
