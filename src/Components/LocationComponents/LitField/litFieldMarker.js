import React from 'react'
import { Paper } from '@material-ui/core'
import useStyles from './styles'

export default function LitFieldMarker(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.marker}>
            {props.location.name}
        </Paper>
    )
}