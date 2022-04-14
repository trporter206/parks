import React from 'react'
import { Paper } from '@material-ui/core'

export default function ArtsMarker(props) {
    return (
        <Paper>
            {props.location.type}
        </Paper>
    )
}