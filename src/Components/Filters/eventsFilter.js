import React from "react";
import {InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import filterList from '../List/listSlice'

const hoods = ['Arbutus-Ridge', 'Downtown', 'Dunbar-Southlands', 'Fairview', 'Grandview-Woodland', 'Hastings-Sunrise', 'Kensington-Cedar Cottage', 'Kerrisdale', 'Killarney', 'Kitsilano', 'Marpole', 'Mount Pleasant', 'Renfrew-Collingwood', 'Riley Park', 'Shaughnessy', 'Strathcona', 'Sunset', 'Victoria-Fraserview', 'West End', 'West Point Grey', 'South Cambie', 'Oakridge']

export default function EventsFilter(props) {
    const classes = useStyles()
    const filter = useSelector(state => state.list.listFilter)
    const dispatch = useDispatch()

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Neighborhood</InputLabel>
                <Select value={filter['Neighbourhood']} onChange={(e) => dispatch(filterList({field: 'Neighbourhood', term: e.target.value}))}>
                    {hoods.map((hood, i) => (
                        <MenuItem key={i} value={hood}>{hood}</MenuItem>
                    ))}
                </Select>
        </FormControl>
        </div>
    )
}