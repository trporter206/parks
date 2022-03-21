import React, {useState} from 'react'
import {Autocomplete} from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js'

export default function Header(props) {
  const classes = useStyles()
  const [autoComplete, setAutoComplete] = useState(null)
  const onLoad =(autoC) => setAutoComplete(autoC)
  const onPlaceChanged =() => {
    const lat = autoComplete.getPlace().geometry.location.lat()
    const lng = autoComplete.getPlace().geometry.location.lng()
    props.setCoordinates({lat,lng})
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          Community Explorer
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
            Find nearby parks
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
