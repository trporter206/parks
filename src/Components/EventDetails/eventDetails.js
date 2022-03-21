import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LanguageIcon from '@material-ui/icons/Language';
import useStyles from './styles.js'

export default function SelectionDetails(props)  {
  const classes = useStyles()
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <Card elevation={6}>
      <CardContent>
        <Typography gutterBottom variant="h5">{props.event.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Type</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.event.type}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Info</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.event.info}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
