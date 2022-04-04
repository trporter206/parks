import React, {useEffect} from 'react'
import ParksFilter from '../Components/Filters/parksFilter'
import EventsFilter from '../Components/Filters/eventsFilter'
import GardensFilter from '../Components/Filters/gardensFilter'
import ArtFilter from '../Components/Filters/artsFilter'

export default function FilterContainer(props)  {

  if (props.type === 'parks') {
    return <ParksFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  } else if (props.type === 'events') {
    return <EventsFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  } else if (props.type === 'communityGardens') {
    return <GardensFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  } else if (props.type === 'publicArt') {
    return <ArtFilter searchObject={props.searchObject} setSearchObject={props.setSearchObject}/>
  }
}
