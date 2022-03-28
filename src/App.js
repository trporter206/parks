import React, {useState, useEffect} from 'react';
import Header from './Components/Header/header'
import List from './Components/List/list'
import Map from './Components/Map/map'
import {CssBaseline, Grid} from '@material-ui/core'
import {parksData, testEvents, communityGardensData, publicArtData} from './Data/data';

export default function App() {
  const [data, setData] = useState(parksData)
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [type, setType] = useState('parks')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    if (type === 'parks') {
      setData(parksData)
    } else if (type === 'events') {
      setData(testEvents)
    } else if (type === 'communityGardens'){
      setData(communityGardensData)
    } else if (type === 'publicArt'){
      setData(publicArtData)
    }
  }, [type])

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List locations={data}
                childClicked={childClicked}
                type={type}
                setType={setType}
                isLoading={isLoading}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates}
               setBounds={setBounds}
               coordinates={coordinates}
               locations={data}
               setChildClicked={setChildClicked}/>
        </Grid>
      </Grid>
    </div>
  )
}
