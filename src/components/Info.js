import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect } from 'react'
import AppContext from "../Context/ContextProvider"
const Style = {
  infoBox: {
    marginTop: '10%',
    marginLeft: '20px'
  },
  header: {
    fontWeight: '600',
    fontSize:'1.5em'
  },
  infoGrid: {
    margin: '20px 20px'
  }

}

const Info = () => {
  const context = useContext(AppContext);
  const { info} = context
  // useEffect(() => {
  //   setinfo(eventsArr[0])
  //   console.log(info);
  // }, [info])

  return (
    <div>
      <Box sx={Style.infoBox}>
        <Typography sx={Style.header}>{info?.ID}</Typography>
        <Typography sx={Style.header}>Person Detected</Typography>
        <Grid container sx={Style.infoGrid}>
          <Grid item xs={6}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{info?.Name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Location</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{info?.Location}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Date</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{info?.Date}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Time</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{info?.Time}</Typography>
          </Grid>
        </Grid>
        <Typography>Description:</Typography>
        <Typography>{`${info?.Name} detected at ${info?.Location} on ${info?.Date}`}</Typography>
      </Box>
    </div>
  )
}

export default Info