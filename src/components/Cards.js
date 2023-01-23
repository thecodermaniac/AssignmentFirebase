import React, { useContext } from 'react'
import { Stack } from '@mui/system';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
import AppContext from "../Context/ContextProvider"

const Cards = ({ person }) => {
    const context = useContext(AppContext);
    const {setinfo } = context
    const handleClick = () => {
        setinfo(person)
    }
    return (
        <div>
            <Card sx={{ display: 'flex', backgroundColor: 'gray', margin: '20px 20px' }} onClick={handleClick}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Stack direction="column" spacing={2}>
                            <Typography sx={{ color: 'white' }}>{person.ID}:{person.Location}</Typography>
                            <Typography>Person Detected</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>{person.Date}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>{person.Time}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Cards