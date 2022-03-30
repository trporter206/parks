import React, {useRef, useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery, Paper } from '@material-ui/core';
import useSupercluster from "use-supercluster";
import useStyles from './styles.js'

const Marker = ({ children }) => children;

export default function Map(props) {
  const classes = useStyles()
  const mapRef = useRef()
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const center = {lat: 49.246292, lng: -123.116226}
  const [zoom, setZoom] = useState(10)
  const [bounds, setBounds] = useState({})

  return (
    <div style={{height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCirdtGsmjUM19VnhLURcB2T01J62C6e_4" }}
        defaultCenter={center}
        center={props.coordinates}
        defaultZoom={12}
        margin={[50,50,50,50]}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={(e) => {
          setZoom(e.zoom)
          props.setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds([
            e.bounds.nw.lng,
            e.bounds.se.lat,
            e.bounds.se.lng,
            e.bounds.nw.lat
          ])
        }}
        onChildClick={(child) => props.setChildClicked(child)}
        >
        {props.locations.map((location,i) => (
          <Marker key={i} lat={location.coordinates[0]} lng={location.coordinates[1]}>
            <button className={classes.marker}>
              <Paper>
                {location.name || location.type}
              </Paper>
            </button>
          </Marker>
        ))}
      </GoogleMapReact>
    </div>
  )
}