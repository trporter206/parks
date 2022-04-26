import { useSelector } from 'react-redux'
import ParksMarker from '../Components/LocationComponents/Park/parkMarker'
import EventsMarker from '../Components/LocationComponents/Event/eventsmarker'
import BasketballMarker from '../Components/LocationComponents/Basketball/basketballMarker'
import TennisMarker from '../Components/LocationComponents/Tennis/tennisMarker'
import BaseballMarker from '../Components/LocationComponents/Baseball/baseballMarker'

export default function MarkerContainer(props)  {
  const type = useSelector(state => state.list.type)

  if (type === 'parks' || type === '') {
    return <ParksMarker location={props.location}/>
  } else if (type === 'events') {
    return <EventsMarker location={props.location}/>
  } else if (type === 'basketball') {
    return <BasketballMarker location={props.location}/>
  } else if (type === 'tennis') {
    return <TennisMarker location={props.location}/>
  } else if (type === 'baseball') {
    return <BaseballMarker location={props.location}/>
  }
}
