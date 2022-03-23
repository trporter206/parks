import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LanguageIcon from '@material-ui/icons/Language';
import useStyles from './styles.js'

export default function BasketballDetails(props)  {
  const classes = useStyles()
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <Card elevation={6}>
      <CardContent>
        <Typography gutterBottom variant="h5">{props.court.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Address</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.court.address}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'># courts</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.court.numCourts}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
