import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import SelectionDetailsContainer from '../../Containers/selectioncontainer.js'

import useStyles from './styles.js'

export default function List(props) {
  const classes = useStyles()
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    const refs = Array(props.parks?.length).fill().map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  },[props.parks])
  return (
    <div className={classes.container}>
      <Typography variant='h4'>Parks and Events</Typography>
      {props.isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={props.type} onChange={(e) => props.setType(e.target.value)}>
            <MenuItem value='parks'>Parks</MenuItem>
            <MenuItem value='events'>Events</MenuItem>
            <MenuItem value='basketball'>Basketball Courts</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Sport</InputLabel>
          <Select value={props.sport} onChange={(e) => props.setSport(e.target.value)}>
            <MenuItem value='any'>any</MenuItem>
            <MenuItem value='basketball'>basketball</MenuItem>
            <MenuItem value='running'>soccer</MenuItem>
            <MenuItem value='spikeball'>baseball</MenuItem>
            <MenuItem value='volleyball'>volleyball</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
          {props.parks?.map((park, i) => (
            <Grid ref={elRefs[i]} item key={i} xs={12}>
              <SelectionDetailsContainer park={park}
                                         type={props.type}
                                         selected={Number(props.childClicked) === i}
                                         refProp={elRefs[i]}/>
            </Grid>
          ))}
        </Grid>
        </>
      )}
    </div>
  )
}
