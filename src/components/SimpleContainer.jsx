import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#ccc', height: '100vh' }} />
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta molestiae aut tenetur cupiditate velit dolore!</p>
        <Button sx={{ bgcolor: "red"}} variant="contained">Click</Button>
        <Button sx={{ bgcolor: "blue", color: "white"}} variant="contained">Click</Button>
      </Container>
    </React.Fragment>
  );
}
