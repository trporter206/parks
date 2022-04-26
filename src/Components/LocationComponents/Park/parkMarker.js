import React from 'react'
import { Paper } from '@material-ui/core'
import useStyles from './styles.js'
import { CallMissedSharp } from '@material-ui/icons'

export default function ParksMarker(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.marker} elevation={3}>
            {props.location.name}
        </Paper>
    )
}