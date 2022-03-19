import React, {useState, useEffect, createRef} from 'react'
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import SelectionDetails from '../SelectionDetails/selectionDetails.js'

import useStyles from './styles.js'

export default function List(props) {
  const classes = useStyles()
  const [type, setType] = useState('parks')
  const [sport, setSport] = useState('any')
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    const refs = Array(props.parks.length).fill().map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  },[props.parks])
  return (
    <div className={classes.container}>
      <Typography variant='h4'>Parks and Events</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value='parks'>parks</MenuItem>
          <MenuItem value='events'>events</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Sport</InputLabel>
        <Select value={sport} onChange={(e) => setSport(e.target.value)}>
          <MenuItem value='any'>any</MenuItem>
          <MenuItem value='basketball'>basketball</MenuItem>
          <MenuItem value='soccer'>soccer</MenuItem>
          <MenuItem value='baseball'>baseball</MenuItem>
          <MenuItem value='volleyball'>volleyball</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {props.parks?.map((park, i) => (
          <Grid ref={elRefs[i]} item key={i} xs={12}>
            <SelectionDetails park={park}
                              selected={Number(props.childClicked) === i}
                              refProp={elRefs[i]}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
