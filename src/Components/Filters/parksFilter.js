import React from "react";
import {InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import {filterList} from '../List/listSlice'
import { nanoid } from "@reduxjs/toolkit";

const hoods = ['any', 'Arbutus-Ridge', 'Downtown', 'Dunbar-Southlands', 'Fairview', 'Grandview-Woodland', 'Hastings-Sunrise', 'Kensington-Cedar Cottage', 'Kerrisdale', 'Killarney', 'Kitsilano', 'Marpole', 'Mount Pleasant', 'Renfrew-Collingwood', 'Riley Park', 'Shaughnessy', 'Strathcona', 'Sunset', 'Victoria-Fraserview', 'West End', 'West Point Grey', 'South Cambie', 'Oakridge']

export default function ParksFilter() {
    const classes = useStyles()
    const filter = useSelector(state => state.list.listFilter)
    const dispatch = useDispatch()

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select value={filter['Neighbourhood']} label ='Neighbourhood' onChange={(e) => dispatch(filterList(['neighbourhood', e.target.value]))}>
                    {hoods.map((hood) => (
                        <MenuItem key={nanoid()} value={hood}>{hood}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Select value={filter['Washrooms']} label='Washrooms' onChange={(e) => dispatch(filterList(['washrooms', e.target.value]))}>
                    <MenuItem key={nanoid()} value='Y'>Yes</MenuItem>
                    <MenuItem key={nanoid()} value='N'>No</MenuItem>
                    <MenuItem key={nanoid()} value='any'>Any</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}