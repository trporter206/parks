import React, { useState } from 'react'
import {InputLabel, Select, MenuItem, FormControl, Button, TextField } from '@material-ui/core'
import { useDispatch } from "react-redux";
import { filterList, eventAdded } from '../../List/listSlice';
import { nanoid } from '@reduxjs/toolkit'
import useStyles from './styles.js'

const types = ['running', 'spikeball', 'volleyball', 'basketball', 'yoga', 'hobby', 'soccer']

export default function AddEventForm()  {
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
  }

  return (
    <div>
      <h2>Add a New Event</h2>
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
        </FormControl>
    </div>
  )
}