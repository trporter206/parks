import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery, Paper } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import useStyles from './styles.js'

export default function Map(props) {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const center = {lat: 49.246292, lng: -123.116226}
  const zoom = 11

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCirdtGsmjUM19VnhLURcB2T01J62C6e_4" }}
        defaultCenter={center}
        center={props.coordinates}
        defaultZoom={zoom}
        margin={[50,50,50,50]}
        onChange={(e) => {
          props.setCoordinates({lat: e.center.lat, lng: e.center.lng})
          props.setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={(child) => props.setChildClicked(child)}
        >
        {props.parks?.map((park, i) => (
          <div className={classes.markerContainer}
               lat={Number(park.coordinates[0])}
               lng={Number(park.coordinates[1])}
               key={i}>
               {
                 !isDesktop ? (
                   <LocationOnOutlinedIcon color='primary' fontSize='large' />
                 ) : (
                   <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                      {park.name}
                    </Typography>
                   </Paper>
                 )
               }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}
