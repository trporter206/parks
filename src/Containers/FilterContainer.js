import ParksFilter from '../Components/Filters/parksFilter'
import EventsFilter from '../Components/Filters/eventsFilter'
import TennisFilter from '../Components/Filters/tennisFilter'
import BasketballFilter from '../Components/Filters/basketballFilter'
import BaseballFilter from '../Components/Filters/baseballFilter'
import BallHockeyFilter from '../Components/Filters/ballHockeyFilter'
import LitFieldFilter from '../Components/Filters/litFieldFilter'
import { useSelector } from 'react-redux'

export default function FilterContainer(props)  {
  const type = useSelector(state => state.list.type)

  if (type === 'parks' || type === '') {
    return <ParksFilter/>
  } else if (type === 'events') {
    return <EventsFilter/>
  } else if (type === 'tennis') {
    return <TennisFilter/>
  } else if (type === 'basketball') {
    return <BasketballFilter/>
  } else if (type === 'baseball') {
    return <BaseballFilter/>
  } else if (type === 'ballHockey') {
    return <BallHockeyFilter/>
  } else if (type === 'litField') {
    return <LitFieldFilter/>
  }
}
