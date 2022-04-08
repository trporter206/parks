import React from 'react'
import EventDetails from '../Components/LocationComponents/Event/event'
import ParkDetails from '../Components/LocationComponents/Park/park'
import ArtDetails from '../Components/LocationComponents/Art/art'
import GardenDetails from '../Components/LocationComponents/Garden/garden'
import { useSelector } from 'react-redux'

export default function SelectionDetailsContainer(props)  {
  const type = useSelector(state => state.list.type)
  
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  if (type === 'parks' || type === '') {
      return <ParkDetails park={props.location} />
  } else if (type === 'events') {
      return <EventDetails event={props.location} />
  } else if (type === 'publicArt'){
    return <ArtDetails art={props.location} />
  } else {
    return <GardenDetails garden={props.location} />
  }
}
