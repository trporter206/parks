import React, {useState, useEffect} from 'react';
import Header from './Components/Header/header'
import List from './Components/List/list'
import Map from './Components/Map/map'
import {CssBaseline, Grid} from '@material-ui/core'
import {parksData, testEvents, basketballCourts} from './Data/data';

export default function App() {
  const [parks, setParks] = useState(parksData)
  const [filteredParks, setFilteredParks] = useState([])
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
      setFilteredParks([])
    } else if (type === 'parks') {
      setParks(parksData)
      setFilteredParks([])
    } else {
      setParks(basketballCourts)
      setFilteredParks([])
    }
    setIsLoading(false)
  }, [type])

  useEffect(() => {
    const filteredParks = parks.filter((park) => park.type?.includes(sport))
    setFilteredParks(filteredParks)
  }, [sport])

  // create useeffect to only show parks within map bounds

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List parks={filteredParks.length ? filteredParks : parks}
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
               parks={filteredParks.length ? filteredParks : parks}
               setChildClicked={setChildClicked}/>
        </Grid>
      </Grid>
    </div>
  )
}
