import React, {useState, useEffect} from 'react';
import Header from './Components/Header/header'
import List from './Components/List/list'
import Map from './Components/Map/map'
import {CssBaseline, Grid} from '@material-ui/core'
import parks from './Data/parks.json'

let idCollection = []
function generateId() {
  let id = Math.floor(Math.random() * 1000)
  while(idCollection.includes(id)){
    id = Math.floor(Math.random() * 1000)
  }
  return id
}

const parksData = parks.map((park) => {
  return {
    name: park.fields.name,
    currentEvents: [],
    photos: '',
    amenities: [],
    ratings: [3,4,2,1,5,5],
    hectare: park.fields.hectare,
    neighbourhood: park.fields.neighbourhoodname,
    coordinates: park.fields.googlemapdest,
    facilities: park.fields.facilities,
    crossStreets: [park.fields.ewstreet, park.fields.nsstreet],
    street: park.fields.streetname,
    streetNumber: park.fields.streetnumber,
    washrooms: park.fields.washrooms,
    address: String(park.fields.streetnumber).concat(" ", String(park.fields.streetname)),
    neighbourhoodurl: String(park.fields.neighbourhoodurl)
  }
})

export default function App() {
  const [parks, setParks] = useState(parksData)
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  // create useeffect to only show parks within map bounds

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List parks={parks}
                childClicked={childClicked}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates}
               setBounds={setBounds}
               coordinates={coordinates}
               parks={parks}
               setChildClicked={setChildClicked}/>
        </Grid>
      </Grid>
    </div>
  )
}
