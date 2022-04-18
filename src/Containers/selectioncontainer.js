import React from 'react'
import EventDetails from '../Components/LocationComponents/Event/event'
import ParkDetails from '../Components/LocationComponents/Park/park'
import BasketballCourt from '../Components/LocationComponents/Basketball/basketball'
import TennisCourt from '../Components/LocationComponents/Tennis/tennis'
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
  } else if (type === 'basketball'){
    return <BasketballCourt court={props.location} />
  } else if (type === 'tennis'){
    return <TennisCourt court={props.location} />
  }
}
