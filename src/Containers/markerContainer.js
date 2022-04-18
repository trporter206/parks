import { useSelector } from 'react-redux'
import ParksMarker from '../Components/LocationComponents/Park/parkMarker'
import EventsMarker from '../Components/LocationComponents/Event/eventsmarker'
import BasketballMarker from '../Components/LocationComponents/Basketball/basketballMarker'

export default function MarkerContainer(props)  {
  const type = useSelector(state => state.list.type)

  if (type === 'parks' || type === '') {
    return <ParksMarker location={props.location}/>
  } else if (type === 'events') {
    return <EventsMarker location={props.location}/>
  } else if (type === 'basketball') {
    return <BasketballMarker location={props.location}/>
  }
}
