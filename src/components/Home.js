import React from 'react'


import { AppBar, Grid, Typography } from '@mui/material';
import Info from './Info';
import Events from './Events'
import { Box } from '@mui/system';

const Home = () => {

    return (
        <div>
            <AppBar>
                <Typography>SqlAi</Typography>
            </AppBar>
            <Box sx={{ height: '100vh', marginTop: '30px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <Info />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Image</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Events />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Home