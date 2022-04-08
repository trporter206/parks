import React, {useState, useEffect} from 'react';
import Header from './Components/Header/header'
import List from './Components/List/list'
import Map from './Components/Map/map'
import FilterContainer from './Containers/FilterContainer';
import {CssBaseline, Grid, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'
import {parksData, testEvents, communityGardensData, publicArtData} from './Data/data';
import { useSelector, useDispatch } from 'react-redux';
import { changeType } from './Components/List/listSlice';

export default function App() {
  const [type, setType] = useState('parks')
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchObject, setSearchObject] = useState({})

  const dispatch = useDispatch()

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
    } else if (type === 'events') {
      setFilteredData(testEvents)
      setData(testEvents)
    } else if (type === 'communityGardens') {
      setFilteredData(communityGardensData)
      setData(communityGardensData)
    } else if (type === 'publicArt') {
      setFilteredData(publicArtData)
      setData(publicArtData)
    }
  }, [type])

  useEffect(() => {
    console.log(searchObject)
    if (Object.keys(searchObject).length === 0){
      return 
    }
    const newData = []
    const matchParams = Object.keys(searchObject)
    const matches = 0
    for (let i=0; i<filteredData.length; i++){
      for (let j=0; i<matchParams.length; i++){
        if(filteredData[i][matchParams[j]] != matchParams[j]) {
          break
        } else {
          matches++
          if (matches === matchParams.length){
            newData.push(filteredData[i])
          }
        }
      }
    }
    setFilteredData(newData)
  },[searchObject])

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => dispatch(changeType(e.target.value))}>
              <MenuItem value='parks'>Parks</MenuItem>
              <MenuItem value='events'>Events</MenuItem>
              <MenuItem value='communityGardens'>Community Gardens</MenuItem>
              <MenuItem value='publicArt'>Public Art</MenuItem>
            </Select>
          </FormControl>
          <FilterContainer type={type} 
                           searchObject={searchObject}
                           setSearchObject={setSearchObject}/>
          <List locations={filteredData}
                childClicked={childClicked}
                setType={setType}
                isLoading={isLoading}
                type={type}/>
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
