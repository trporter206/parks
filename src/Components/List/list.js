import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid} from '@material-ui/core'
import SelectionDetailsContainer from '../../Containers/selectioncontainer.js'
import useStyles from './styles.js'
import { useSelector } from 'react-redux'

export default function List(props) {
  const classes = useStyles()
  const [elRefs, setElRefs] = useState([])
  const list = useSelector(state => state.list.filteredList)
  const selectType = useSelector(state => state.list.type)
  const selected = useSelector(state => state.list.selected)

  const renderList = list?.map((location, i) => (
    <Grid ref={elRefs[i]} item key={i} xs={12}>
      <SelectionDetailsContainer location={location}
                                 type={selectType}
                                 selected={selected === i}
                                 refProp={elRefs[i]}
                                 />
    </Grid>
  ))

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
          {renderList}
        </Grid>
        </>
      )}
    </div>
  )
}
