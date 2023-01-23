import React, { useContext, useEffect } from 'react'
import Cards from './Cards'
import AppContext from "../Context/ContextProvider"
import { db } from '../FirebaseConfig';
import { ref, onValue } from "firebase/database";
import { Box } from '@mui/system';

const Events = () => {
    const context = useContext(AppContext);
    let { eventsArr, SetEvents,setinfo } = context
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


    // eventsArr = tempdata
    // setinfo(tempdata)
    // console.log(eventsArr);
    return (
        <div>
            <Box sx={{ overflow: 'scroll' }} height='100vh'>
                {eventsArr?.map((value, ind) => {
                    return <Cards person={value} key={ind} />
                })}
            </Box>
        </div>
    )
}

export default Events