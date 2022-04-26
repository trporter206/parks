import React from 'react'
import {Box, Typography, Card, CardContent} from '@material-ui/core'
import useStyles from './styles.js'

export default function BallHockeyField(props)  {
  const classes = useStyles()
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <Card elevation={6}>
      <CardContent>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Name</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.field.name}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Address</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.field.address}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Neighbourhood</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.field.neighbourhood}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Remarks</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.field.remarks}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
