import React from 'react'
import { Paper } from '@material-ui/core'

export default function EventsMarker(props) {
    return (
        <Paper>
            {props.location.name}
        </Paper>
    )
}