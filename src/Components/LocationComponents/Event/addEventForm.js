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
  const [location, setLocation] = useState([])
  const dispatch = useDispatch()
  const classes = useStyles()

  const onNameChanged = e => setName(e.target.value)
  const onTypeChanged = e => {
      setType(e.target.value)
      dispatch(filterList([type, e.target.value]))
  }
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
      console.log(name)
      setName('')
      setType('')
      setInfo('')
      setLocation([])
      console.log(name)
    }
  }

  return (
    <div>
      <h2>Add a New Event</h2>
        <FormControl className={classes.formControl}>
            <TextField
            type="text"
            label="Name"
            id="postName"
            name="postName"
            value={name}
            onChange={onNameChanged}
            />
            <TextField
            id="postInfo"
            label="Info"
            name="postInfo"
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
            id="postLocation"
            name="postLocation"
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