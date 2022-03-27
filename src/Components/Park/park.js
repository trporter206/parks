import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import {LocationOn, SportsSoccer, ParkIcon} from '@material-ui/icons'
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
                   image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1280px-Concord_Pacific_Master_Plan_Area.jpg' 
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
          <Typography gutterBottom variant='subtitle1'>{props.park.hectare}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Washrooms</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.washrooms}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Facilities</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.facilities}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Advisories</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.advisories}</Typography>
        </Box>
        {props.park.features.map((park, i) => (
            <Chip label={props.park.features[i]} size='small' variant="outlined" />
          ))}
        <CardActions>
          <LanguageIcon onClick={() => window.open(props.park.neighbourhoodurl, '_blank')}/>
        </CardActions>
      </CardContent>
    </Card>
  )
}
