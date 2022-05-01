import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language';
import useStyles from './styles.js'

export default function ParkDetails(props)  {
  const classes = useStyles()
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <Card elevation={6}>
      <CardMedia component='img'
                   src={props.park.image} 
                   alt='downtown vancouver'/>
      <CardContent>
        <Typography gutterBottom variant="h5">{props.park.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Address</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.address}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Neighborhood</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.neighbourhood}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Size</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.size}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Washrooms</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.washrooms}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>About</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.about}</Typography>
        </Box>
        {props.park.features.map((park, i) => (
            <Chip label={props.park.features[i]} size='small' variant="outlined" />
          ))}
      </CardContent>
    </Card>
  )
}
