import parks from './parks2.json'
import baseballDiamonds from './baseballDiamonds.json'
import ballHockey from './ballHockey.json'
import litFields from './litFields.json'
import { nanoid } from '@reduxjs/toolkit'

// scraped files

export const parksData = []
parks.forEach((park) => {
  const local = {
    id: nanoid(),
    type: 'park',
    name: park.name,
    currentEvents: [],
    image: park.image,
    features: park.features,
    size: park.size,
    neighbourhood: park.neighbourhood,
    address: park.address,
    washrooms: (park.washrooms === 'Y' ? 'Yes' : 'No'),
    washroomInfo: park.washroomInfo,
    about: park.about,
    coordinates: park.coordinates
  }
  

  parksData.push(local)
})

export const baseballData = []
baseballDiamonds.forEach((diamond) => {
  const local = {
    id: nanoid(),
    type: 'baseball',
    name: diamond.name,
    currentEvents: [],
    address: diamond.address,
    neighbourhood: diamond.neighbourhood,
    coordinates: diamond.coordinates,
    diamonds: diamond.count,
    remarks: diamond.remarks
  }
  baseballData.push(local)
})

export const ballHockeyData = []
ballHockey.forEach((bh) => {
  const local = {
    id: nanoid(),
    type: 'ballHockey',
    name: bh.name,
    currentEvents: [],
    address: bh.address,
    neighbourhood: bh.neighbourhood,
    coordinates: bh.coordinates,
    count: bh.count,
    remarks: bh.remarks
  }
  ballHockeyData.push(local)
})

export const litFieldData = []
litFields.forEach((field) => {
  const local = {
    id: nanoid(),
    type: 'litField',
    name: field.name,
    currentEvents: [],
    neighbourhood: field.neighbourhood,
    count: field.count,
    coordinates: field.coordinates,
    address: field.address
  }
  litFieldData.push(local)
})

// --------------------------------------------------------------
// manually made files
export const testEvents = [
  {
    id: nanoid(),
    numPeople: 3,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'looking for new runners',
    sport: 'running',
    info: 'come join some new to town runners!',
    coordinates: [49.249783, -123.15525],
  },
  {
    id: nanoid(),
    numPeople: 10,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'day at the beach',
    sport: 'spikeball',
    info: 'looking for more spikeball players',
    coordinates: [49.285911, -123.120948],
  },
  {
    id: nanoid(),
    numPeople: 8,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'street ballers',
    sport: 'basketball',
    info: 'lets do a pick-up game',
    coordinates: [49.249576, -123.082823],
  },
  {
    id: nanoid(),
    numPeople: 5,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'advanced training',
    sport: 'running',
    info: 'advanced runners training for marathon',
    coordinates: [49.271852, -123.214423],
  },
  {
    id: nanoid(),
    numPeople: 4,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'photography walk',
    sport: 'hobby',
    info: 'Im new to town, lets take a tour',
    coordinates: [49.215457,-123.142529],
  },
  {
    id: nanoid(),
    numPeople: 8,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'volleyball tournament',
    sport: 'volleyball',
    info: 'looking for more volleyball players',
    coordinates: [49.239181, -123.131293],
  },
  {
    id: nanoid(),
    numPeople: 2,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'neighborhood run',
    sport: 'running',
    info: 'trying yo get more into running',
    coordinates: [49.227998, -123.04413],
  },
  {
    id: nanoid(),
    numPeople: 6,
    dateTime: '',
    location: '',
    type: 'event',
    name: 'yoga day',
    sport: 'yoga',
    info: 'lets do yoga on this sunny day',
    coordinates: [49.257091, -123.098595],
  }
]

export const basketballCourts = [
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Andy Livingston Park",
    address: "89 Expo Boulevard",
    neighbourhood: "Downtown",
    coordinates: [49.278661, -123.106249],
    courts: 1,
    remarks: "small court"
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Coopers Park",
    address: "1020 Marinaside Crescent",
    neighbourhood: "Downtown",
    coordinates: [49.273281, -123.114705],
    courts: 1,
    remarks: "small court"
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "David Lam Park",
    address: "1300 Pacific Boulevard",
    neighbourhood: "Downtown",
    coordinates: [49.271920, -123.125824],
    courts: 2,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Memorial West Park",
    address: "4701 Dunbar St",
    neighbourhood: "Dunbar-Southlands",
    coordinates: [49.243455, -123.187663],
    courts: 1,
    remarks: 'small court'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Sutcliffe Park",
    address: "4701 Dunbar St",
    neighbourhood: "Fairview",
    coordinates: [49.268943, -123.134557],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Garden Park",
    address: "1851 Garden Drive",
    neighbourhood: "Grandview-Woodland",
    coordinates: [49.268197, -123.058940],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Pandora Park",
    address: "2325 Franklin Street",
    neighbourhood: "Grandview-Woodland",
    coordinates: [49.282686, -123.058172],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Hastings Community Park",
    address: "3000 E Pender Street",
    neighbourhood: "Hastings-Sunrise",
    coordinates: [49.280002, -123.039811],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Hastings Park",
    address: "2901 E Hastings",
    neighbourhood: "Hastings-Sunrise",
    coordinates: [49.281683, -123.034693],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Brewers Park",
    address: "4175 Victoria Drive",
    neighbourhood: "Kensington-Cedar Cottage",
    coordinates: [49.247741, -123.066730],
    courts: 2,
    remarks: '2 half courts'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Cedar Cottage Park",
    address: "2650 Clark Drive",
    neighbourhood: "Kensington-Cedar Cottage",
    coordinates: [49.260885, -123.077058],
    courts: 2,
    remarks: '2 half courts, 1 junior hoop'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Clark Park",
    address: "1500 E 14th Avenue",
    neighbourhood: "Kensington-Cedar Cottage",
    coordinates: [49.256898, -123.073756],
    courts: 1,
    remarks: 'small court'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Glen Park",
    address: "3999 Glen Drive",
    neighbourhood: "Kensington-Cedar Cottage",
    coordinates: [49.249509, -123.082712],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Grays Park",
    address: "4850 St. Catherines Street",
    neighbourhood: "Kensington-Cedar Cottage",
    coordinates: [49.240656, -123.085280],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "John Hendry (Trout Lake) Park",
    address: "3300 Victoria Drive",
    neighbourhood: "Kensington-Cedar Cottage",
    coordinates: [49.254702, -123.064682],
    courts: 2,
    remarks: '1 junior court'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Kingcrest Park",
    address: "4150 Knight Street",
    neighbourhood: "Kensington-Cedar Cottage",
    coordinates: [49.247657, -123.074537],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Riverfront Park",
    address: "2750 E Kent Ave S",
    neighbourhood: "Killarney",
    coordinates: [49.205453, -123.050529],
    courts: 1,
    remarks: 'half court'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Kitsilano Beach Park",
    address: "1499 Arbutus Street",
    neighbourhood: "Kitsilano",
    coordinates: [49.275871, -123.152054],
    courts: 2,
    remarks: 'Victoria Day to Labor Day'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Oak Park",
    address: "900 W 59th Avenue",
    neighbourhood: "Marpole",
    coordinates: [49.216518, -123.128564],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "William Mackie Park",
    address: "1592 W 71st Avenue",
    neighbourhood: "Marpole",
    coordinates: [49.216518, -123.128564],
    courts: 1,
    remarks: 'small court'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Mount Pleasant Park",
    address: "3161 Ontario Street",
    neighbourhood: "Mount Pleasant",
    coordinates: [49.257313, -123.106714],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Robson Park",
    address: "599 Kingsway",
    neighbourhood: "Mount Pleasant",
    coordinates: [49.258544, -123.092503],
    courts: 2,
    remarks: '2 half courts'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Collingwood Park",
    address: "5275 McKinnon Street",
    neighbourhood: "Renfrew-Collingwood",
    coordinates: [49.236670, -123.036937],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Gaston Park",
    address: "3470 Crowley Drive",
    neighbourhood: "Renfrew-Collingwood",
    coordinates: [49.236667, -123.031413],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Melbourne Park",
    address: "3530 Vanness Avenue",
    neighbourhood: "Renfrew-Collingwood",
    coordinates: [49.236594, -123.028507],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Queen Elizabeth Park",
    address: "4600 Cambie Street",
    neighbourhood: "Riley-Little Mountain",
    coordinates: [49.238305, -123.113703],
    courts: 4,
    remarks: '3 full courts; 1 junior court'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Riley Park",
    address: "50 E 30th Avenue",
    neighbourhood: "Riley-Little Mountain",
    coordinates: [49.243119, -123.104888],
    courts: 1,
    remarks: 'junior hoop'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Douglas Park",
    address: "801 W 22nd Avenue",
    neighbourhood: "South Cambie",
    coordinates: [49.252646, -123.122369],
    courts: 1,
    remarks: '1 half court; 1 junior hoop'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Strathcona Park",
    address: "857 Malkin Avenue",
    neighbourhood: "South Cambie",
    coordinates: [49.274900, -123.085530],
    courts: 1,
    remarks: ''
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "Humm Park",
    address: "7250 Humm Street",
    neighbourhood: "Victoria-Fraserview",
    coordinates: [49.218875, -123.063136],
    courts: 1,
    remarks: 'half court'
  },
  {
    id: nanoid(),
    type: 'basketball',
    currentEvents: [],
    name: "West Point Grey Park",
    address: "2250 Trimble Street",
    neighbourhood: "West Point Grey",
    coordinates: [49.267266, -123.204355],
    courts: 2,
    remarks: '1 half court'
  },
]

export const tennisCourts = [
 {
   id: nanoid(),
   type: 'tennis',
   currentEvents: [],
   name: "Andy Livingston Park",
   address: "89 Expo Boulevard",
   neighbourhood: "Downtown",
   coordinates: [49.277808, -123.102882],
   courts: 2,
   remarks: ""
 },
 {
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "David Lam Park",
  address: "1300 Pacific Boulevard",
  neighbourhood: "Downtown",
  coordinates: [49.271514, -123.126331],
  courts: 2,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Memorial West Park",
  address: "4701 Dunbar Street",
  neighbourhood: "Dunbar-Southlands",
  coordinates: [49.243903, -123.187779],
  courts: 6,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Charleson Park",
  address: "999 Charleson Street",
  neighbourhood: "Fairview",
  coordinates: [49.266290, -123.119005],
  courts: 5,
  remarks: "outside the park on rooftop of 600 Moberly Road practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Granville Loop Park",
  address: "1435 W 5th Avenue",
  neighbourhood: "Fairview",
  coordinates: [49.267410, -123.137273],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Granville Park",
  address: "3001 Fir Street",
  neighbourhood: "Fairview",
  coordinates: [49.258326, -123.142505],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Sutcliffe Park",
  address: "1318 Cartwright Street",
  neighbourhood: "Fairview",
  coordinates: [49.269085, -123.133637],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Garden Park",
  address: "1851 Garden Drive",
  neighbourhood: "Grandview-Woodland",
  coordinates: [49.268033, -123.058985],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "McSpadden Park",
  address: "2125 Victoria Drive",
  neighbourhood: "Grandview-Woodland",
  coordinates: [49.266647, -123.066421],
  courts: 2,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Pandora Park",
  address: "2325 Franklin Street",
  neighbourhood: "Grandview-Woodland",
  coordinates: [49.282301, -123.058243],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Burrard View Park",
  address: "650 North Penticton Street",
  neighbourhood: "Hastings-Sunrise",
  coordinates: [49.290436, -123.051102],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Hastings Community Park",
  address: "3000 E Pender Street",
  neighbourhood: "Hastings-Sunrise",
  coordinates: [49.280516, -123.041078],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Kaslo Park",
  address: "2851 E 7th Avenue",
  neighbourhood: "Hastings-Sunrise",
  coordinates: [49.264050, -123.045322],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Rupert Park",
  address: "1600 Rupert Street",
  neighbourhood: "Hastings-Sunrise",
  coordinates: [49.270804, -123.030770],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Brewers Park",
  address: "4175 Victoria Drive",
  neighbourhood: "Kensington-Cedar Cottage",
  coordinates: [49.247516, -123.066722],
  courts: 2,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Clark Park",
  address: "4175 Victoria Drive",
  neighbourhood: "Kensington-Cedar Cottage",
  coordinates: [49.257120, -123.073876],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Grays Park",
  address: "4175 Victoria Drive",
  neighbourhood: "Kensington-Cedar Cottage",
  coordinates: [49.240482, -123.085635],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "John Hendry (Trout Lake) Park",
  address: "3300 Victoria Drive",
  neighbourhood: "Kensington-Cedar Cottage",
  coordinates: [49.254275, -123.064821],
  courts: 3,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Elm Park",
  address: "3300 Victoria Drive",
  neighbourhood: "Kerrisdale",
  coordinates: [49.233153, -123.163212],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Captain Cook Park",
  address: "3398 E 54th Avenue",
  neighbourhood: "Killarney",
  coordinates: [49.217328, -123.034586],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Champlain Heights Park",
  address: "3351 Maquinna Drive",
  neighbourhood: "Killarney",
  coordinates: [49.215881, -123.032489],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Riverfront Park",
  address: "2750 E Kent Ave S",
  neighbourhood: "Killarney",
  coordinates: [49.205795, -123.050664],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Almond Park",
  address: "3600 W 12th Avenue",
  neighbourhood: "Kitsilano",
  coordinates: [49.260976, -123.184287],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Kitsilano Beach Park",
  address: "1499 Arbutus Street",
  neighbourhood: "Kitsilano",
  coordinates: [49.273633, -123.153638],
  courts: 10,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Mcbride Park",
  address: "3350 W 4th Avenue",
  neighbourhood: "Kitsilano",
  coordinates: [49.268082, -123.180979],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Tatlow Park",
  address: "2845 W 3rd Avenue",
  neighbourhood: "Kitsilano",
  coordinates: [49.270368, -123.169070],
  courts: 3,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Eburne Park",
  address: "950 W 71st Avenue",
  neighbourhood: "Marpole",
  coordinates: [49.206454, -123.129496],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Oak Park",
  address: "900 W 59th Avenue",
  neighbourhood: "Marpole",
  coordinates: [49.214288, -123.128302],
  courts: 2,
  remarks: "Lorne Main Tennis Courts"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Guelph Park",
  address: "2390 Brunswick Street",
  neighbourhood: "Mount Pleasant",
  coordinates: [49.264078, -123.095385],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Robson Park",
  address: "599 Kingsway",
  neighbourhood: "Mount Pleasant",
  coordinates: [49.258380, -123.092605],
  courts: 3,
  remarks: "practice wall at north of middle court"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Melbourne Park",
  address: "3530 Vanness Avenue",
  neighbourhood: "Renfrew-Collingwood",
  coordinates: [49.236476, -123.029023],
  courts: 2,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Slocan Park",
  address: "2750 E 29th Avenue",
  neighbourhood: "Renfrew-Collingwood",
  coordinates: [49.243909, -123.046490],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Queen Elizabeth Park",
  address: "4600 Cambie Street",
  neighbourhood: "Riley-Little Mountain",
  coordinates: [49.237962, -123.112911],
  courts: 17,
  remarks: "practice wall conservatory"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Heather Park",
  address: "702 W 18th Avenue",
  neighbourhood: "South Cambie",
  coordinates: [49.254731, -123.120753],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Langara Golf Course",
  address: "6706 Alberta Street",
  neighbourhood: "South Cambie",
  coordinates: [49.219151, -123.106774],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Strathcona Park",
  address: "857 Malkin Avenue",
  neighbourhood: "Strathcona",
  coordinates: [49.274758, -123.085546],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "MacDonald Park",
  address: "300 E 44th Avenue",
  neighbourhood: "Sunset",
  coordinates: [49.229801, -123.098194],
  courts: 3,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Memorial South Park",
  address: "5955 Ross Street",
  neighbourhood: "Sunset",
  coordinates: [49.231217, -123.086208],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Moberly Park",
  address: "7646 Prince Albert Street",
  neighbourhood: "Sunset",
  coordinates: [49.214950, -123.084221],
  courts: 4,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Humm Park",
  address: "7250 Humm Street",
  neighbourhood: "Victoria-Fraserview",
  coordinates: [49.218715, -123.063637],
  courts: 2,
  remarks: ""
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Stanley Park",
  address: "8901 Stanley Park Drive",
  neighbourhood: "West End",
  coordinates: [49.292307, -123.145268],
  courts: 21,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "Jericho Beach Park",
  address: "3941 Point Grey Road",
  neighbourhood: "West Point Grey",
  coordinates: [49.273572, -123.199725],
  courts: 4,
  remarks: "practice wall"
},
{
  id: nanoid(),
  type: 'tennis',
  currentEvents: [],
  name: "West Point Grey Park",
  address: "2250 Trimble Street",
  neighbourhood: "West Point Grey",
  coordinates: [49.266406, -123.205372],
  courts: 4,
  remarks: ""
},


]

export const masterList = [
  ...parksData,
  ...baseballData,
  ...ballHockeyData,
  ...litFieldData,
  ...testEvents,
  ...basketballCourts,
  ...tennisCourts
]