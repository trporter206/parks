import React, {useState, useEffect} from 'react';
import Header from './Components/Header/header'
import List from './Components/List/list'
import Map from './Components/Map/map'
import {CssBaseline, Grid} from '@material-ui/core'
import {parksData, testEvents, communityGardensData, publicArtData} from './Data/data';

export default function App() {
  const [type, setType] = useState('parks')
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [neighbourhood, setNeighbourhood] = useState('All')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
    setFilteredData(parksData)
  }, [])

  useEffect(() => {
    if (type === 'parks') {
      setFilteredData(parksData)
      setData(parksData)
      setNeighbourhood('All')
    } else if (type === 'events') {
      setFilteredData(testEvents)
      setData(testEvents)
      setNeighbourhood('All')
    } else if (type === 'communityGardens') {
      setFilteredData(communityGardensData)
      setData(communityGardensData)
      setNeighbourhood('All')
    } else if (type === 'publicArt') {
      setFilteredData(publicArtData)
      setData(publicArtData)
      setNeighbourhood('All')
    }
  }, [type])

  useEffect(() => {
    if(neighbourhood === 'All'){
      setFilteredData(data)
      return 
    }
    let newData = []
    for(let i = 0; i<data.length; i++){
      if(data[i].neighbourhood === neighbourhood){
        newData.push(data[i])
      }
    }
    setFilteredData(newData)
  },[neighbourhood])

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List locations={filteredData}
                childClicked={childClicked}
                type={type}
                setType={setType}
                isLoading={isLoading}
                neighbourhood={neighbourhood}
                setNeighbourhood={setNeighbourhood}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates}
               coordinates={coordinates}
               locations={filteredData}
               setChildClicked={setChildClicked}/>
        </Grid>
      </Grid>
    </div>
  )
}
