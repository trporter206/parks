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
        <Typography gutterBottom variant="h5">{props.park.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Neighborhood</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.park.neighbourhood}</Typography>
        </Box>
        <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
          <LocationOnIcon />{props.park.address}
        </Typography>
        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(props.park.neighbourhoodurl, '_blank')}>
            Park Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
