import parks from './parks.json'
import communityGardens from './community-gardens-and-food-trees.json'
import publicArt from './public-art.json'

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
    advisories: park.fields.advisories,
    features: park.fields.features,
    address: String(park.fields.streetnumber).concat(" ", String(park.fields.streetname)),
    neighbourhoodurl: String(park.fields.neighbourhoodurl)
  }
})

export const communityGardensData = communityGardens.filter((garden) => {
  if (garden.fields.hasOwnProperty('geom')){
    return true
  }
  return false
}).map((garden) => {
    return {
      name: garden.fields.name,
      plots: garden.fields.number_of_plots,
      coordinates: [garden.fields.geom.coordinates[1], garden.fields.geom.coordinates[0]],
      jurisdiction: garden.fields.jurisdiction,
      created: garden.fields.year_created,
      address: garden.fields.merged_address,
      numFoodTrees: garden.fields.number_of_food_trees,
      neighborhood: garden.fields.geo_local_area,
      stewards: garden.fields.steward_or_managing_organization,
      contact: garden.fields.public_e_mail,
      notes: garden.fields.notes
    }
})

export const publicArtData = publicArt.filter((art) => {
  if (art.fields.hasOwnProperty('geom')){
    return true
  }
  return false
}).map((art) => {
    return {
      owner: art.fields.ownership,
      type: art.fields.type,
      coordinates: [art.fields.geom.coordinates[1],art.fields.geom.coordinates[0]],
      neighborhood: art.fields.neighbourhood, 
      status: art.fields.status,
      numArtists: art.fields.artists,
      installationYear: art.fields.yearofinstallation,
      site: art.fields.sitename,
      address: art.fields.siteaddress,
      url: art.fields.url,
      statement: art.fields.artistprojectstatement,
      description: art.fields.descriptionofwork,
      material: art.fields.primarymaterial
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

