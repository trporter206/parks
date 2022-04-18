import React from "react";
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import {MenuItem, FormControl, Select } from '@material-ui/core'
import {filterList} from '../List/listSlice'
import { nanoid } from "@reduxjs/toolkit";

const hoods = ['any', 'Downtown', 'Dunbar-Southlands', 'Fairview', 'Grandview-Woodland', 'Hastings-Sunrise', 'Kensington-Cedar Cottage', 'Killarney', 'Kitsilano', 'Marpole', 'Mount Pleasant', 'Renfrew-Collingwood', 'Riley-Little Mountain', 'South Cambie', 'Victoria-Fraserview', 'West Point Grey']

export default function BasketballFilter(props) {
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
        </div>
    )
}