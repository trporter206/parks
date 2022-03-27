import React from 'react'
import BasketballDetails from '../Components/Basketball/basketball'
import EventDetails from '../Components/Event/event'
import ParkDetails from '../Components/Park/park'

export default function SelectionDetailsContainer(props)  {
  if (props.selected) {
    props.refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  if (props.type === 'parks') {
      return <ParkDetails park={props.park} />
  } else if (props.type === 'events') {
      return <EventDetails event={props.park} />
  } else {
      return <BasketballDetails court={props.park} />
  }
}
