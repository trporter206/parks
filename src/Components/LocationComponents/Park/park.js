import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language';
import {NavLink} from "react-router-dom";
import useStyles from './styles.js'
import { nanoid } from '@reduxjs/toolkit';

export default function ParkDetails(props)  {
  const classes = useStyles()
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  const toggleAbout = () => {
    const washroomInfo = document.getElementById(props.park.id)
    if (washroomInfo.style.display !== "none") {
      washroomInfo.style.display = "none";
    } else {
      washroomInfo.style.display = "block";
    }
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
        {props.park.washrooms === 'Yes' ? (
          <Box display='flex' justifyContent='space-between'>
            <div>
              <Typography className={classes.washroomInfo} variant='subtitle1'>Location</Typography>
              <Typography className={classes.washroomInfo} gutterBottom variant='subtitle1'>{props.park.washroomInfo[0]}</Typography>
            </div>
            <div>
              <Typography className={classes.washroomInfo} variant='subtitle1'>Winter hours:</Typography>
              <Typography className={classes.washroomInfo} gutterBottom variant='subtitle1'>{props.park.washroomInfo[1]}</Typography>
            </div>
            <div>
              <Typography className={classes.washroomInfo} variant='subtitle1'>Summer hours:</Typography>
              <Typography className={classes.washroomInfo} gutterBottom variant='subtitle1'>{props.park.washroomInfo[2]}</Typography>
            </div>
          </Box>
        ) : (
          <div></div>
        )}
        {/* list events here */}
        <NavLink to={`/addEventForm/${props.park.id}`} 
                 key={nanoid()} 
                 className={({ isActive }) => isActive ? "green" : "blue"}
                 >
                   Create event here
        </NavLink>
        <Button onClick={toggleAbout}>Read More</Button>
        <Box id={props.park.id} display='flex' justifyContent='space-between' style={{backgroundColor: 'lightgray', 
                                                                                      marginLeft: '-16px', 
                                                                                      marginRight: '-16px',
                                                                                      padding: '1rem',
                                                                                      display: 'none'}}>
          <Typography gutterBottom variant='subtitle1'>{props.park.about}</Typography>
        </Box>
        <Box style={{paddingTop: '1rem'}}>
          {props.park.features?.map((_, i) => (
              <Chip label={props.park.features[i]} size='small' variant="outlined" />
            ))}
        </Box>
      </CardContent>
    </Card>
  )
}
