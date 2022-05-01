import React, {useRef, useState} from 'react'
import GoogleMapReact from 'google-map-react';
import useStyles from './styles.js'
import { useSelector, useDispatch } from 'react-redux';
import MarkerContainer from '../../Containers/markerContainer.js';
import { changeSelected } from '../List/listSlice.js';

const Marker = ({ children }) => children;

export default function Map(props) {
  const classes = useStyles()
  const mapRef = useRef()
  const center = {lat: 49.246292, lng: -123.116226}
  const [zoom, setZoom] = useState(10)
  const [bounds, setBounds] = useState({})
  const dispatch = useDispatch()

  const selectLocations = useSelector(state => state.list.filteredList)

  return (
    <div style={{height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
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
        onChildClick={(child) => {
          console.log(child)
          dispatch(changeSelected(child))
        }} 
        >
        {selectLocations.map((location,i) => (
          <Marker key={i} lat={location.coordinates[0]} lng={location.coordinates[1]}>
            <button className={classes.marker}>
              <MarkerContainer location={location} />
            </button>
          </Marker>
        ))}
      </GoogleMapReact>
    </div>
  )
}