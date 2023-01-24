import React, { useContext } from 'react'
import { Stack } from '@mui/system';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
import AppContext from "../Context/ContextProvider"

const Style = {
    cardBox: { display: 'flex', backgroundColor: 'gray', margin: '20px 20px' },
    cardText:{color: 'white'}
}
const Cards = ({ person }) => {
    const context = useContext(AppContext);
    const { setinfo } = context
    const handleClick = () => {
        setinfo(person)
    }
    return (
        <div>
            <Card sx={Style.cardBox} onClick={handleClick}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Stack direction="column" spacing={2}>
                            <Typography sx={Style.cardText}>{person.ID}:{person.Location}</Typography>
                            <Typography sx={Style.cardText}>Person Detected</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={Style.cardText}>{person.Date}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={Style.cardText}>{person.Time}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Cards