import React, {useState} from "react";
import {InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import {filterList} from '../List/listSlice'
import AddEventForm from "../../routes/addEventForm.js";
import { nanoid } from "@reduxjs/toolkit";

const types = ['any','running', 'spikeball', 'volleyball', 'basketball', 'yoga', 'hobby', 'soccer']

export default function EventsFilter(props) {
    const classes = useStyles()
    const filter = useSelector(state => state.list.listFilter)
    const dispatch = useDispatch()

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select value={filter['Sport']} label='Sport' onChange={(e) => dispatch(filterList(['sport', e.target.value]))}>
                    {types.map((type) => (
                        <MenuItem key={nanoid()} value={type}>{type}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}