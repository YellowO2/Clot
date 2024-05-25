import React from 'react';
import { Container, Typography, Card, CardContent, CardHeader } from '@mui/material';

const posts = [
  { id: 1, title: 'Post 1', content: 'This is the content of post 1' },
  { id: 2, title: 'Post 2', content: 'This is the content of post 2' },
  { id: 1, title: 'Post 1', content: 'This is the content of post 1' },
  { id: 2, title: 'Post 2', content: 'This is the content of post 2' },
];

const Home1 = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Communities</Typography>
      {posts.map(post => (
        <Card key={post.id} variant="outlined" style={{ marginBottom: '1rem' }}>
          <CardHeader title={post.title} />
          <CardContent>
            <Typography>{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Home1;
