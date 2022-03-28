import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import useStyles from './styles.js'

export default function GardenDetails(props)  {
  const classes = useStyles()
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <Card elevation={6}>
      <CardContent>
        <Typography gutterBottom variant="h5">{props.garden.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Address</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.garden.address}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
