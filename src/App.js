import React, {useState, useEffect} from 'react';
import Header from './Components/Header/header'
import List from './Components/List/list'
import Map from './Components/Map/map'
import {CssBaseline, Grid} from '@material-ui/core'
import parks from './Data/parks.json'

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

const testEvents = [
  {
    name: 'looking for new runners',
    type: 'running group',
    info: 'come join some new to town runners!',
    coordinates: [49.249783, -123.15525]
  },
  {
    name: 'day at the beach',
    type: 'spikeball',
    info: 'looking for more spikeball players',
    coordinates: [49.285911, -123.120948]
  },
  {
    name: 'street ballers',
    type: 'basketball',
    info: 'lets do a pick-up game',
    coordinates: [49.249576, -123.082823]
  },
  {
    name: 'advanced training',
    type: 'running group',
    info: 'advanced runners training for marathon',
    coordinates: [49.271852, -123.214423]
  }
]

export default function App() {
  const [parks, setParks] = useState(parksData)
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [type, setType] = useState('parks')
  const [sport, setSport] = useState('any')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    if (type === 'events') {
      setParks(testEvents)
    } else {
      setParks(parksData)
    }
    setIsLoading(false)
  }, [type])

  // create useeffect to only show parks within map bounds

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List parks={parks}
                childClicked={childClicked}
                type={type}
                setType={setType}
                sport={sport}
                setSport={setSport}
                isLoading={isLoading}/>
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
