import React from 'react';
import logo from './../../logo.svg';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Button, Paper } from '@material-ui/core'

function Home() {
    return (
        <Container maxWidth="sm" className="App">
            <Paper>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React-App + Material UI
        </Typography>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
            </Paper>
        </Container>
    );
}

export default Home;