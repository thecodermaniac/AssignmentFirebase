import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import AppContext from "../Context/ContextProvider"
import { db } from '../FirebaseConfig';
import { ref, onValue } from "firebase/database";
import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ModalFilter from './ModalFilter';

const Style = {
    EvntBox: {
        overflow: 'scroll',
        height: '100vh'
    },
    header: {
        fontWeight: '600',
        fontSize: '1.5em'
    },
    StackSection: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 39px 0 18px',
        justifyContent: 'space-between'
    }
}

const Events = () => {
    const context = useContext(AppContext);
    const [open, setOpen] = useState(false)
    let { eventsArr, SetEvents, setinfo } = context
    var tempdata;
    useEffect(() => {
        const dbRef = ref(db, 'user')

        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            tempdata = data
            SetEvents(data)
            setinfo(eventsArr[0])
            console.log(eventsArr);
        });
    }, [])

    return (
        <div>
            {open && <ModalFilter mod={{ open, setOpen }} />}
            <Stack sx={Style.StackSection}>
                <Typography sx={Style.header}>Events</Typography>
                <IconButton onClick={() => { setOpen(true) }}>
                    <MenuIcon />
                </IconButton>
            </Stack>
            <Box sx={Style.EvntBox} >

                {eventsArr?.map((value, ind) => {
                    return <Cards person={value} key={ind} />
                })}
            </Box>
        </div>
    )
}

export default Events