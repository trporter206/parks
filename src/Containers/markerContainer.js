import { useSelector } from 'react-redux'
import ParksMarker from '../Components/LocationComponents/Park/parkMarker'
import EventsMarker from '../Components/LocationComponents/Event/eventsmarker'
import GardensMarker from '../Components/LocationComponents/Garden/gardensMarker'
import ArtsMarker from '../Components/LocationComponents/Art/artsMarker'

export default function MarkerContainer(props)  {
  const type = useSelector(state => state.list.type)

  if (type === 'parks' || type === '') {
    return <ParksMarker location={props.location}/>
  } else if (type === 'events') {
    return <EventsMarker location={props.location}/>
  } else if (type === 'communityGardens') {
    return <GardensMarker location={props.location}/>
  } else if (type === 'publicArt') {
    return <ArtsMarker location={props.location}/>
  }
}
