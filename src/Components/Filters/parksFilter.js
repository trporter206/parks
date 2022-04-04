import React, {useEffect, useState} from "react";
import {Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles.js'

const hoods = ['Arbutus-Ridge', 'Downtown', 'Dunbar-Southlands', 'Fairview', 'Grandview-Woodland', 'Hastings-Sunrise', 'Kensington-Cedar Cottage', 'Kerrisdale', 'Killarney', 'Kitsilano', 'Marpole', 'Mount Pleasant', 'Renfrew-Collingwood', 'Riley Park', 'Shaughnessy', 'Strathcona', 'Sunset', 'Victoria-Fraserview', 'West End', 'West Point Grey', 'South Cambie', 'Oakridge']

export default function ParksFilter(props) {
    const classes = useStyles()
    const [neighbourhood, setNeighbourhood] = useState('')

    useEffect(() => {
        const newFilter = props.searchObject
        newFilter['neighbourhood'] = neighbourhood
        props.setSearchObject(newFilter)
        console.log(props.searchObject)
    }, [neighbourhood])

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>Neighborhood</InputLabel>
                <Select value={neighbourhood} onChange={(e) => setNeighbourhood(e.target.value)}>
                    {hoods.map((hood, i) => (
                        <MenuItem key={i} value={String(hood)}>{String(hood)}</MenuItem>
                    ))}
                </Select>
        </FormControl>
        </div>
    )
}