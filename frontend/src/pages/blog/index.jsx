import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'
import BlogHero from './Hero'

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    description: 'Learn the basics of React and start building your first application.',
    date: 'May 15, 2023',
    image: 'https://vapes-uae.com/uploads/5c2b6459-4329-42e4-bd91-f7ebb743952f.webp',
  },
  {
    id: 2,
    title: 'Advanced CSS Techniques',
    description: 'Explore advanced CSS techniques to create stunning web designs.',
    date: 'May 20, 2023',
    image: 'https://vapes-uae.com/uploads/5c2b6459-4329-42e4-bd91-f7ebb743952f.webp',
  },
  {
    id: 3,
    title: 'Introduction to GraphQL',
    description: 'Discover the power of GraphQL and how it can improve your API design.',
    date: 'May 25, 2023',
    image: 'https://vapes-uae.com/uploads/5c2b6459-4329-42e4-bd91-f7ebb743952f.webp',
  },
  {
    id: 4,
    title: 'Mastering TypeScript',
    description: 'Take your JavaScript skills to the next level with TypeScript.',
    date: 'June 1, 2023',
    image: 'https://vapes-uae.com/uploads/5c2b6459-4329-42e4-bd91-f7ebb743952f.webp',
  },
]

export default function BlogsPage() {
  return (
    <div>
     {/* <BlogHero/> */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>

        <Grid container spacing={4} my={5}>
          {blogPosts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    {post.date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}