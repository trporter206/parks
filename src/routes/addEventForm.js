import React, { useState } from 'react'
import {InputLabel, Select, MenuItem, FormControl, Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from "react-redux";
import {Outlet, Link, useParams} from 'react-router-dom'
import { filterList, eventAdded } from '../Components/List/listSlice';
import { nanoid } from '@reduxjs/toolkit'
import useStyles from '../Components/Filters/styles'
import { parksData } from '../Data/data';

const types = ['running', 'spikeball', 'volleyball', 'basketball', 'yoga', 'hobby', 'soccer']

export default function AddEventForm(props)  {
  let params = useParams()
  const park = useSelector(state => state.list.filteredList.find(park => park.id === params.id))
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [info, setInfo] = useState('')
  const [location, setLocation] = useState([49.251913, -123.118087])
  const dispatch = useDispatch()
  const classes = useStyles()

  const onNameChanged = e => setName(e.target.value)
  const onTypeChanged = e => setType(e.target.value)
  const onInfoChanged = e => setInfo(e.target.value)
  const onLocationChanged = e => {
      e.preventDefault()
      setLocation(e.target.value)
  }

  const onSaveEventClicked = () => {
    if (name && type && info && location) {
      dispatch(
        eventAdded({
          id: nanoid(),
          name: name,
          type: type,
          info: info,
          coordinates: location
        })
      )
      setName('')
      setType('')
      setInfo('')
      setLocation([49.251913, -123.118087])
    }
    props.setShowEventForm(!props.showEventForm)
  }

  return (
    <div>
      <h2>Create event at {park.name}</h2>
        <FormControl className={classes.formControl}>
            <TextField
            type="text"
            label="Name"
            id="eventName"
            name="eventName"
            value={name}
            onChange={onNameChanged}
            />
            <TextField
            id="eventInfo"
            label="Info"
            name="eventInfo"
            value={info}
            onChange={onInfoChanged}
            />
            <Select value={type} label="Type" onChange={onTypeChanged}>
                {types.map((choice) => (
                    <MenuItem key={nanoid()} value={choice}>{choice}</MenuItem>
                ))}
            </Select>
            <Button
            type="button"
            id="eventLocation"
            name="eventLocation"
            value={location}
            onChange={onLocationChanged}
            >
            Set Location
            </Button>
            <Button type="button" onClick={onSaveEventClicked}>Save Event</Button>
            <Link to='/'>Cancel</Link>
        </FormControl>
        <Outlet/>
    </div>
  )
}