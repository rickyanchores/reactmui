import { Button, Typography } from '@mui/material';
import React from 'react'

const Home = () => {
    return (
        <div className='Home' >
            <div className="container">
                
            </div>
            <div className="text">

                <h1>Home</h1>
                <Typography variant="h6">this is a test react material-ui</Typography>
                <Button variant='contained'>Click Here</Button>
                         
            </div>
            <img src="https://images.unsplash.com/photo-1653778005824-4bc7dc887603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" alt="" />
        </div>
    )
}

export default Home;
