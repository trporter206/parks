import React from 'react'
import { Paper } from '@material-ui/core'

export default function BasketballMarker(props) {
    return (
        <Paper>
            {props.location.name}
        </Paper>
    )
}