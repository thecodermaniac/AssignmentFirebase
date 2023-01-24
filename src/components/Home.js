import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Grid, Typography } from '@mui/material';
import Info from './Info';
import Events from './Events'
import { Box } from '@mui/system';
import AppContext from "../Context/ContextProvider"

const Style = {
    imgBox: {
        maxHeight: '80%',
        width: '100%',
        marginTop: '10%'
    },
    imgHeader: {
        fontWeight: '600',
        fontSize: '1.5em'
    },
    navBar: {
        '&.MuiAppBar-root': {
            backgroundColor: '#373399'
        }

    },
    btnMale: {
        '&.MuiButton-root': {
            backgroundColor: 'green',
            color: 'white',
            margin:'3px'
        }
    },
    btnFemale: {
        '&.MuiButton-root': {
            backgroundColor: 'red',
            color: 'white',
            margin:'3px'
        }
    }
}
const Home = () => {
    const context = useContext(AppContext);
    const { info } = context
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={Style.navBar}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SECQURAISE
                        </Typography>
                        <Box>
                            <Button sx={Style.btnMale}>25</Button>
                            <Button sx={Style.btnFemale}>25</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ height: '100vh', marginTop: '30px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={4}>
                        <Info />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={Style.imgHeader}>{info?.Gender}</Typography>
                        <Box
                            component="img"
                            sx={Style.imgBox}
                            alt="The house from the offer."
                            src={`/Images/${info?.Name}.jpg`}
                        />
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