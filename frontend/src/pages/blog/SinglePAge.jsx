import React from 'react'
import {
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import BlogHero from './Hero'

export default function SignleBlogs() {

  return (
    <div>
      <BlogHero/>
      <Container maxWidth="lg" sx={{ mt: 2, px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={2} my={5}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                The Future of Web Development
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" paragraph>
                Published on June 15, 2023 by John Doe
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                Introduction
              </Typography>
              <Typography variant="body2" paragraph>
                Web development is constantly evolving, with new technologies and methodologies emerging every year. In this post, we'll explore some of the trends that are shaping the future of web development.
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                1. Progressive Web Apps (PWAs)
              </Typography>
              <Typography variant="body2" paragraph>
                Progressive Web Apps are becoming increasingly popular due to their ability to provide an app-like experience on the web.
              </Typography>
              <Typography variant="subtitle1" component="h4" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                Benefits of PWAs
              </Typography>
              <Typography variant="body2" paragraph>
                PWAs offer several advantages, including offline functionality, push notifications, and improved performance.
              </Typography>
              <Typography variant="subtitle1" component="h5" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Offline Functionality
              </Typography>
              <Typography variant="body2" paragraph>
                One of the key features of PWAs is their ability to work offline or with a poor internet connection.
              </Typography>
              <Typography variant="subtitle1" component="h6" gutterBottom sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                Service Workers
              </Typography>
              <Typography variant="body2" paragraph>
                Service workers are scripts that run in the background and enable many PWA features, including offline support.
              </Typography>
              <blockquote>
                <Typography variant="body2" sx={{ fontStyle: 'italic', borderLeft: 4, borderColor: 'primary.main', pl: 2 }}>
                  "Progressive Web Apps are the future of web development. They combine the best of web and mobile apps." - Google Developers
                </Typography>
              </blockquote>
              <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                2. WebAssembly
              </Typography>
              <Typography variant="body2" paragraph>
                WebAssembly is a low-level language that runs in modern web browsers at near-native speed. It's designed to complement JavaScript and enable high-performance applications on the web.
              </Typography>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="WebAssembly Diagram"
                width={600}
                height={400}
                layout="responsive"
              />
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1, mb: 3 }}>
                Figure 1: WebAssembly Architecture
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                3. AI-Powered Development Tools
              </Typography>
              <Typography variant="body2" paragraph>
                Artificial Intelligence is making its way into development tools, helping developers write code faster and with fewer errors.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, mb: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>About the Author</Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar alt="John Doe" src="/placeholder.svg?height=50&width=50" sx={{ width: 50, height: 50 }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle2">John Doe</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Web Developer & Tech Enthusiast
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                John has been developing web applications for over a decade and is passionate about emerging technologies.
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>Related Posts</Typography>
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemText 
                    primary={<Typography variant="body2">The Rise of Jamstack</Typography>}
                    secondary={<Typography variant="caption">May 20, 2023</Typography>}
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem disablePadding>
                  <ListItemText 
                    primary={<Typography variant="body2">Mastering React Hooks</Typography>}
                    secondary={<Typography variant="caption">April 15, 2023</Typography>}
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem disablePadding>
                  <ListItemText 
                    primary={<Typography variant="body2">GraphQL vs REST: A Comparison</Typography>}
                    secondary={<Typography variant="caption">March 10, 2023</Typography>}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}