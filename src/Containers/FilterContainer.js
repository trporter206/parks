import ParksFilter from '../Components/Filters/parksFilter'
import EventsFilter from '../Components/Filters/eventsFilter'
import GardensFilter from '../Components/Filters/gardensFilter'
import ArtFilter from '../Components/Filters/artsFilter'
import { useSelector } from 'react-redux'

export default function FilterContainer(props)  {
  const type = useSelector(state => state.list.type)

  if (type === 'parks' || type === '') {
    return <ParksFilter/>
  } else if (type === 'events') {
    return <EventsFilter/>
  } else if (type === 'communityGardens') {
    return <GardensFilter/>
  } else if (type === 'publicArt') {
    return <ArtFilter/>
  }
}
