import React from 'react'
import {Box, Typography, Card, CardContent} from '@material-ui/core'
import useStyles from './styles.js'

export default function BaseballDiamond(props)  {
  const classes = useStyles()
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
  return (
    <Card elevation={6}>
      <CardContent>
        <Typography gutterBottom variant="h5">{props.diamond.owner}</Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>name</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.diamond.name}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Address</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.diamond.address}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Diamonds</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.diamond.diamonds}</Typography>
        </Box>
        {/* <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Remarks</Typography>
          <Typography gutterBottom variant='subtitle1'>{props.diamond.remarks}</Typography>
        </Box> */}
      </CardContent>
    </Card>
  )
}
