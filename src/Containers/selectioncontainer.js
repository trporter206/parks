import React from 'react'
import EventDetails from '../Components/LocationComponents/Event/event'
import ParkDetails from '../Components/LocationComponents/Park/park'
import ArtDetails from '../Components/LocationComponents/Art/art'
import GardenDetails from '../Components/LocationComponents/Garden/garden'

export default function SelectionDetailsContainer(props)  {
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  if (props.type === 'parks') {
      return <ParkDetails park={props.location} />
  } else if (props.type === 'events') {
      return <EventDetails event={props.location} />
  } else if (props.type === 'publicArt'){
    return <ArtDetails art={props.location} />
  } else {
    return <GardenDetails garden={props.location} />
  }
}
