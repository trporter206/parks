import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import SelectionDetailsContainer from '../../Containers/selectioncontainer.js'
import useStyles from './styles.js'

const hoods = ['Arbutus-Ridge', 'Downtown', 'Dunbar-Southlands', 'Fairview', 'Grandview-Woodland', 'Hastings-Sunrise', 'Kensington-Cedar Cottage', 'Kerrisdale', 'Killarney', 'Kitsilano', 'Marpole', 'Mount Pleasant', 'Renfrew-Collingwood', 'Riley Park', 'Shaughnessy', 'Strathcona', 'Sunset', 'Victoria-Fraserview', 'West End', 'West Point Grey', 'South Cambie', 'Oakridge']

export default function List(props) {
  const classes = useStyles()
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    const refs = Array(props.locations?.length).fill().map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  },[props.locations])

  return (
    <div className={classes.container}>
      <Typography variant='h4'>locations and Events</Typography>
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
            <MenuItem value='communityGardens'>Community Gardens</MenuItem>
            <MenuItem value='publicArt'>Public Art</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Neighbourhood</InputLabel>
          <Select value={props.neighbourhood} onChange={(e)=> props.setNeighbourhood(e.target.value)}>
            <MenuItem value="All">All</MenuItem>
            {hoods.map((hood) => (
              <MenuItem value={String(hood)}>{String(hood)}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
          {props.locations?.map((location, i) => (
            <Grid ref={elRefs[i]} item key={i} xs={12}>
              <SelectionDetailsContainer location={location}
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
