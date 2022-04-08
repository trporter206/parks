import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography} from '@material-ui/core'
import SelectionDetailsContainer from '../../Containers/selectioncontainer.js'
import FilterContainer from '../../Containers/FilterContainer.js'
import useStyles from './styles.js'
import { useSelector } from 'react-redux'
import { selectList } from './listSlice.js'

export default function List(props) {
  const classes = useStyles()
  const [elRefs, setElRefs] = useState([])
  const list = useSelector(state => state.list.listContents)
  
  useEffect(() => {
    const refs = Array(list?.length).fill().map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  },[list])

  return (
    <div className={classes.container}>
      {props.isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
        <Grid container spacing={3} className={classes.list}>
          {list?.map((location, i) => (
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
