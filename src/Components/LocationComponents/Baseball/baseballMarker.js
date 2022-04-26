import React from 'react'
import { Paper } from '@material-ui/core'

export default function BaseballMarker(props) {
    return (
        <Paper>
            {props.location.name}
        </Paper>
    )
}