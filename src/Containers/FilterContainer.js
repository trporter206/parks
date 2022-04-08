import React, {useEffect} from 'react'
import ParksFilter from '../Components/Filters/parksFilter'
import EventsFilter from '../Components/Filters/eventsFilter'
import GardensFilter from '../Components/Filters/gardensFilter'
import ArtFilter from '../Components/Filters/artsFilter'
import { useSelector } from 'react-redux'

export default function FilterContainer(props)  {
  const type = useSelector(state => state.list.type)

  if (type === 'parks' || type === '') {
    return <ParksFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  } else if (type === 'events') {
    return <EventsFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  } else if (type === 'communityGardens') {
    return <GardensFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  } else if (type === 'publicArt') {
    return <ArtFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  }
}
