import React, {useState, useEffect} from 'react';
import Header from './Components/Header/header'
import List from './Components/List/list'
import Map from './Components/Map/map'
import FilterContainer from './Containers/FilterContainer';
import {CssBaseline, Grid, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { changeType } from './Components/List/listSlice';

export default function App() {
  const [coordinates, setCoordinates] = useState({})
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const locations = useSelector(state => state.list.filteredList)
  const selectType = useSelector(state => state.list.type)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  return (
    <div>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select value={selectType} onChange={(e) => dispatch(changeType(e.target.value))}>
              <MenuItem value='parks'>Parks</MenuItem>
              <MenuItem value='events'>Events</MenuItem>
              <MenuItem value='basketball'>Basketball Courts</MenuItem>
              <MenuItem value='tennis'>Tennis Courts</MenuItem>
              <MenuItem value='baseball'>Baseball Diamonds</MenuItem>
            </Select>
          </FormControl>
          <FilterContainer />
          <List childClicked={childClicked}
                isLoading={isLoading}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates}
               coordinates={coordinates}
               locations={locations}
               setChildClicked={setChildClicked}/>
        </Grid>
      </Grid>
    </div>
  )
}
