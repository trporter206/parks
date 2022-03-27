import parks from './parks.json'

export const parksData = parks.map((park) => {
  return {
    name: park.fields.name,
    currentEvents: [],
    photos: '',
    amenities: [],
    ratings: [3,4,2,1,5,5],
    hectare: park.fields.hectare,
    neighbourhood: park.fields.neighbourhoodname,
    coordinates: park.fields.googlemapdest,
    facilities: park.fields.facilities,
    crossStreets: [park.fields.ewstreet, park.fields.nsstreet],
    street: park.fields.streetname,
    streetNumber: park.fields.streetnumber,
    washrooms: park.fields.washrooms,
    facilities: park.fields.facilities,
    advisories: park.fields.advisories,
    features: park.fields.features,
    address: String(park.fields.streetnumber).concat(" ", String(park.fields.streetname)),
    neighbourhoodurl: String(park.fields.neighbourhoodurl)
  }
})

export const testEvents = [
  {
    name: 'looking for new runners',
    type: ['running'],
    info: 'come join some new to town runners!',
    coordinates: [49.249783, -123.15525]
  },
  {
    name: 'day at the beach',
    type: ['spikeball'],
    info: 'looking for more spikeball players',
    coordinates: [49.285911, -123.120948]
  },
  {
    name: 'street ballers',
    type: ['basketball'],
    info: 'lets do a pick-up game',
    coordinates: [49.249576, -123.082823]
  },
  {
    name: 'advanced training',
    type: ['running'],
    info: 'advanced runners training for marathon',
    coordinates: [49.271852, -123.214423]
  },
  {
    name: 'photography walk',
    type: ['hobby'],
    info: 'Im new to town, lets take a tour',
    coordinates: [49.215457,-123.142529]
  },
  {
    name: 'volleyball tournament',
    type: ['volleyball'],
    info: 'looking for more volleyball players',
    coordinates: [49.239181, -123.131293]
  },
  {
    name: 'neighborhood run',
    type: ['running'],
    info: 'trying yo get more into running',
    coordinates: [49.227998, -123.04413]
  },
  {
    name: 'yoga day',
    type: ['yoga'],
    info: 'lets do yoga on this sunny day',
    coordinates: [49.257091, -123.098595]
  }
]

export const basketballCourts = [
    
    {
        name: 'Lord Byng',
        numCourts: 1,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '3167 Crown St, Vancouver, BC V6R 4K9',
        coordinates: [49.258438, -123.193644]
    },
    {
        name: 'Queen Elizabeth Park',
        numCourts: 3.5,
        covered: false,
        hours: {
            Monday: '8am-8am',
            Tuesday: '8am-8am',
            Wednesday: '8am-8am',
            Thursday: '8am-8am',
            Friday: '8am-8am',
            Saturday: '8am-8am',
            Sunday: '8am-8am',
        },
        lights: null,
        wheelchairAccess: true,
        address: '5193 Kersland Dr, Vancouver, BC V5Y 2M9',
        coordinates: [49.2382928294946, -123.11373845923676]
    },
    {
        name: 'Trimble Park',
        numCourts: 1.5,
        covered: false,
        hours: null,
        lights: null,
        wheelchairAccess: true,
        address: '2250 Trimble St, Vancouver, BC V6R 4G9',
        coordinates: [49.26640454149775, -123.2034065530156]
    },
    {
        name: 'Kitsilano Beach',
        numCourts: 2,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '1499 Arbutus St, Vancouver, BC V6J 5N2',
        coordinates: [49.27587448762617, -123.15212002022092]
    },
    {
        name: 'Gray\'s Park',
        numCourts: 1,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '950 E 33rd Ave, Vancouver, BC V5V 3A6',
        coordinates: [49.24048678736054, -123.08522766291681]
    },
    {
        name: 'Mount Pleasant Park',
        numCourts: 1,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: 'Vancouver, BC V5Y 0B3',
        coordinates: [49.257242063636866, -123.10672135419829]
    },
    {
        name: 'PlayMakers',
        numCourts: 1,
        covered: false,
        hours: null,
        lights: null,
        wheelchairAccess: true,
        address: '5445 Baillie St, Vancouver, BC V5Z 3M6',
        coordinates: [49.23636104216225, -123.12346388034425]
    },
    {
        name: 'South Arm',
        numCourts: 2,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '8680 Williams Rd, Richmond, BC V7A 1G6',
        coordinates: [49.140169763604995, -123.12882115549762]
    },
    {
        name: 'Trout Lake',
        numCourts: 1,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: 'Victoria Dr, E 19th Ave, Vancouver, BC V5N 4M4',
        coordinates: [49.254742197935116, -123.06469580084519]
    },
    {
        name: 'Kingcrest Park',
        numCourts: 1,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '4150 Knight St, Vancouver, BC V5N 3M2',
        coordinates: [49.254742197935116, -123.06469580084519]
    },
    {
        name: 'Steveston london',
        numCourts: 2,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '6600 Williams Rd, Richmond, BC V7E 1K5',
        coordinates: [49.14016209405468, -123.1495580097732]
    },
    {
        name: 'Steveston london',
        numCourts: 2,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '6600 Williams Rd, Richmond, BC V7E 1K5',
        coordinates: [49.14016209405468, -123.1495580097732]
    },
    {
        name: 'Glen Park',
        numCourts: 1,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '3999 Glen Dr, Vancouver, BC V5V 4T2',
        coordinates: [49.24951532980841, -123.08268847911293]
    },
    {
        name: 'David Lam',
        numCourts: 2,
        covered: false,
        hours: '24 hours',
        lights: null,
        wheelchairAccess: true,
        address: '350 Beach Crescent, Vancouver, BC V6Z 0A6',
        coordinates: [49.27191626980832, -123.12578875509209]
    },
]

// {
//     name: 'Akate Park',
//     numCourts: 1,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.196146, -122.849727]
// },
// {
//     name: 'Royal Kwantlen Park',
//     numCourts: 1,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.192303, -122.861274]
// },
// {
//     name: 'Guildford Park',
//     numCourts: 1,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.19715519107423, -122.82244762947872]
// },
// {
//     name: 'Double Cage',
//     numCourts: 2,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.19325307427016, -122.8167193465341]
// },
// {
//     name: 'Cross Court',
//     numCourts: .5,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.1971996604718, -122.81037330622671]
// },
// {
//     name: 'Guildford Heights Park',
//     numCourts: 1,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.18837159128935, -122.7949523168896]
// },
// {
//     name: 'Johnston Heights',
//     numCourts: 2,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.18101350217682, -122.79701992340803]
// },
// {
//     name: 'Hickey Courts',
//     numCourts: 2,
//     covered: false,
//     lights: false,
//     wheelchairAccess: true,
//     coordinates: [49.24498341102552, -122.81836280691833]
// }