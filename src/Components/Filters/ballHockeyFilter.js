import React from "react";
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import {MenuItem, FormControl, Select, InputLabel } from '@material-ui/core'
import {filterList} from '../List/listSlice'
import { nanoid } from "@reduxjs/toolkit";

const hoods = ['any', 
                'Fairview', 
                'Granville Woodland', 
                'Kensington-Cedar Cottage', 
                'Marpole', 
                'Renfrew-Collingwood', 
                'Riley-Little Mountain', 
                'Mount Pleasant',
                'Sunset',
                'West End']

export default function BallHockeyFilter(props) {
    const classes = useStyles()
    const filter = useSelector(state => state.list.listFilter)
    const dispatch = useDispatch()

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Neighbourhood</InputLabel>
                <Select value={filter['Neighbourhood']} label ='Neighbourhood' onChange={(e) => dispatch(filterList(['neighbourhood', e.target.value]))}>
                    {hoods.map((hood) => (
                        <MenuItem key={nanoid()} value={hood}>{hood}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}