import React from 'react'
import { Paper } from '@material-ui/core'
import useStyles from './styles.js'

export default function BasketballMarker(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.marker}>
            {props.location.name}
        </Paper>
    )
}