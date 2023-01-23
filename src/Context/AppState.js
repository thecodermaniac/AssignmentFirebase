import { useState } from 'react'
import AppContext from './ContextProvider'

const AppState = (props) => {
    const [eventsArr, SetEvents] = useState([])
    const [info, setinfo] = useState({})
    return (
        <AppContext.Provider value={{ eventsArr, SetEvents, info, setinfo }}>
            {props.children}
        </AppContext.Provider>)


}

export default AppState