import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const AppScreen = () => {

    const auth = useSelector(state => state.auth)

    return (
        <>
            <Navbar />

            <div>
            <Typography variant="h2" align="center" sx={{ marginTop: 5 }}>
                Hi {auth.displayName}
            </Typography>
            </div>
        </>
    )
}

export default AppScreen
