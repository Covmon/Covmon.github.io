import nevada_sunset from '../../photos/nevada_sunset.jpeg'
import amazon_boats from '../../photos/amazon_boats.jpeg'
import bachelor from '../../photos/bachelor.jpeg'
import bryce_shadow from '../../photos/bryce_shadow.jpeg'
import bryce_sunset from '../../photos/bryce_sunset.jpeg'
import cairn from '../../photos/cairn.jpeg'
import cruise_ship from '../../photos/cruise_ship.jpeg'
import denali from '../../photos/denali.jpeg'
import dog from '../../photos/dog.jpeg'
import eagle from '../../photos/eagle.jpeg'
import frog from '../../photos/frog.jpeg'
import glacier from '../../photos/glacier.jpeg'
import gorge from '../../photos/gorge.jpeg'
import machu from '../../photos/machu.jpeg'
import me_glacier from '../../photos/me_glacier.jpeg'
import monkey from '../../photos/monkey.jpeg'
import river_sunset from '../../photos/river_sunset.jpeg'
import teton from '../../photos/teton.jpeg'
import teton_glacier from '../../photos/teton_glacier.jpeg'
import teton_mountain from '../../photos/teton_mountain.jpeg'
import teton_sunset from '../../photos/teton_sunset.jpeg'
import san_diego_sunset from '../../photos/san_diego_sunset.jpeg'
import seine from '../../photos/seine.jpeg'
import big_sur from '../../photos/big_sur.jpeg'
import haifa from '../../photos/haifa.jpeg'
import tel_aviv from '../../photos/tel_aviv.jpeg'
import interlaken from '../../photos/interlaken.jpeg'
import via from '../../photos/via.jpeg'
import lisbon from '../../photos/lisbon.jpeg'
import eiffel from '../../photos/eiffel.jpeg'
import ronda from '../../photos/ronda.jpeg'
import miami from '../../photos/miami.jpeg'

import arienzo from '../../photos/arienzo.jpeg'
import amalfi from '../../photos/amalfi.jpeg'
import montepulciano from '../../photos/montepulciano.jpeg'
import firenze from '../../photos/firenze.jpeg'
import dr from '../../photos/dr.jpeg'
import avare from '../../photos/avare.jpeg'
import rio from '../../photos/rio.jpeg'
import pc from '../../photos/pc.jpeg'
import nebraska from '../../photos/nebraska.jpeg'
import porto from '../../photos/porto.jpeg'
import amsterdam from '../../photos/amsterdam.jpeg'
import bruges from '../../photos/bruges.jpeg'
import chicago from '../../photos/chicago.jpeg'
import maui from '../../photos/maui.jpeg'
import hana from '../../photos/hana.jpeg'
import volcano from '../../photos/volcano.jpeg'
import waimea from '../../photos/waimea.jpeg'
import waterfall from '../../photos/waterfall.jpeg'
import monadnock from '../../photos/monadnock.jpeg'
import jurassic from '../../photos/jurassic.jpeg'
import redwoods from '../../photos/redwoods.jpeg'
import santa_cruz from '../../photos/santa_cruz.jpeg'
import cape_cod from '../../photos/cape_cod.jpeg'
import sc from '../../photos/sc.jpeg'


const photos = [
  {
    image: arienzo,
    location: 'Positano, Italy',
    caption: "The Arienzo Beach Club, which makes for a marvelous beach day.",
    year: 2022,
    id: "italy",
  },
  {
    image: amalfi,
    location: "Amalfi, Italy",
    caption: "View of Amalfi from the water.",
    year: 2022,
  },
  {
    image: montepulciano,
    location: "Montepulciano, Italy",
    caption: "A building in this picturesque hilltop town famous for its wines.",
    year: 2022,
  },
  {
    image: firenze,
    location: "Firenze, Italy",
    caption: "The River Arno at sunset.",
    year: 2022,
  },
  {
    image: dr,
    location: "Samaná, Dominican Republic",
    caption: "Spring break 2022 in the DR.",
    year: 2022,
  },
  {
    image: avare,
    location: "Avare, Brazil",
    caption: "Taken on a lovely cycle through the countryside outside of Avare.",
    year: 2022,
    id: 'brazil',
  },
  {
    image: rio,
    location: "Rio de Janeiro, Brazil",
    caption: "The mountain-meets-ocean landscape in Rio blew my mind.",
    year: 2022,
  },
  {
    image: pc,
    location: "Park City, UT",
    caption: "My first time skiing the Rockies was a smashing (pun intended) success.",
    year: 2021,
  },
  {
    image: nebraska,
    location: "Nebraska",
    caption: "Things I learned driving across the country: (1) Nebraska is reallllyyy wide.",
    year: 2021,
  },
  {
    image: porto,
    location: "Porto, Portugal",
    caption: "I only spent 24 hours here, and it already began to rival Lisbon.",
    year: 2021,
  },
  {
    image: amsterdam,
    location: "Amsterdam, Netherlands",
    caption: "What a sick city. I'll be back.",
    year: 2021,
  },
  {
    image: bruges,
    location: "Bruges, Belgium",
    caption: "We ate all the Belgian essentials here: waffles, fries, and brats.",
    year: 2021,
  },
  {
    image: chicago,
    location: "Chicago, IL",
    caption: "A ridiculous sunset over downtown.",
    year: 2021,
  },
  {
    image: maui,
    location: "Maui, HI",
    caption: "The Iao Valley is one of the wettest places on earth, evidenced by the ridiculous green color of everything.",
    year: 2021,
    id: 'hawaii',
  },
  {
    image: hana,
    location: "Hana, HI",
    caption: "A black sand beach makes for some dramatic photos.",
    year: 2021,
  },
  {
    image: volcano,
    location: "Haleakala, HI",
    caption: "A dramatic hike took us down into the crater of this dormant volcano. Only drawback? We had to hike up and out as well.",
    year: 2021,
  },
  {
    image: waimea,
    location: "Waimea Bay, HI",
    caption: "Ridiculous luck both finding this cliff jumping spot and getting this sunset.",
    year: 2021,
  },
  {
    image: waterfall,
    location: "Oahu, HI",
    caption: "Our hike to Lulumahu Falls was the first thing we did in Hawaii, and it set the standard for the rest of the trip.",
    year: 2021,
  },
  {
    image: monadnock,
    location: "Mount Monadnock, NH",
    caption: "A steep, rocky climb that rewards you with sweeping views.",
    year: 2021,
  },
  {
    image: jurassic,
    location: "Redwoods, CA",
    caption: "This fern valley was used to film Jurassic Park.",
    year: 2020,
  },
  {
    image: redwoods,
    location: "Redwoods, CA",
    caption: "Trees. Big. Freaking. Trees.",
    year: 2020,
  },
  {
    image: santa_cruz,
    location: "Santa Cruz, CA",
    caption: "A surfer who is much cooler than me ends his day at sunset.",
    year: 2020,
  },
  {
    image: cape_cod,
    location: "Provincetown, MA",
    caption: "A lonely lighthouse at the end of Cape Cod.",
    year: 2020,
  },
  {
    image: sc,
    location: "Seabrook Island, SC",
    caption: "My first of many Airbnbs over my gap year was on this beautiful, marshy island.",
    year: 2020,
  },
  {
    image: nevada_sunset,
    location: "Interstate 95 near Lovelock, NV",
    caption: "We camped a few miles off the highway in the Nevada desert on our 14-hour roadtrip from Jackson to San Fransisco.",
    year: 2020,
    id: "wyoming",
  },
  {
   image: teton,
    location: "Grand Tetons, WY",
    caption: "A hike up to Delta Lake in Grand Tetons National Park yields this spectacular view of the Grand Teton.",
    year: 2020,
  },
  {
    image: teton_glacier,
    location: "Grand Tetons, WY",
    caption: "A steep rock scramble brought us to the Teton Glacier, elevation 11,600 feet.",
    year: 2020,
  },
  {
    image: teton_mountain,
    location: "Jackson, WY",
    caption: "The iconic silhouette of the Grand Teton.",
    year: 2020,
  },
  {
    image: teton_sunset,
    location: "Jackson, WY",
    caption: "A sunset over the Teton Range, taken outside of Jackson, Wyoming.",
    year: 2020,
  },
  {
    image: san_diego_sunset,
    location: "San Diego, CA",
    caption: "Snagged this cool photo of a surfer on the beach at sunset in La Jolla, San Diego.",
    year: 2020,
  },
  {
    image: big_sur,
    location: "Big Sur, CA",
    caption: "I had to wake up before 5:30 am to get a glimpse of this gorgeous sunrise over the California coast at Big Sur.",
    year: 2020,
  },
  {
    image: seine,
    location: "Paris, France",
    caption: "A boat floats along the Seine at sunset in central Paris.",
    year: 2019,
    id: "france",
  },
  {
    image: eiffel,
    location: "Paris, France",
    caption: "The Bastille Day (July 14th) fireworks show was absolutely mesmerizing.",
    year: 2019,
  },
  {
    image: ronda,
    location: "Ronda, Spain",
    caption: "The Old Bridge in Ronda was one of the most stunning things I saw on my backpacking trip in Europe.",
    year: 2019,
  },
  {
    image: lisbon,
    location: "Lisbon, Portugal",
    caption: "The streets of the Bairro Alto in Lisbon come alive at night as revelers drink, dance, and chat on the streets outside of bars.",
    year: 2019,
  },
  {
    image: miami,
    location: "Miami, FL",
    caption: "Dramatic clouds in Miami Beach, Florida.",
    year: 2018,
  },
  {
    image: via,
    location: "Interlaken, Switzerland",
    caption: 'The Via Ferrata (literaly "iron road") lets you scale across cliffs in the Swiss Alps.',
    year: 2016,
    id: "switzerland",
  },
  {
    image: interlaken,
    location: "Interlaken, Switzerland",
    caption: "A view of the gorgeous town of Interlaken taken from high above.",
    year: 2016,
  },
  {
    image: haifa,
    location: "Haifa, Israel",
    caption: "The very-well-manicured Bahai'i Center stretches out in front of us in Haifa.",
    year: 2016,
    id: "israel",
  },
  {
    image: tel_aviv,
    location: "Tel Aviv, Israel",
    caption: "The sun appears humongous in the sky behind the skyline of Tel Aviv.",
    year: 2016,
  },
  {
    image: bryce_shadow,
    location: "Bryce Canyon National Park, UT",
    caption: "The rock formations at Bryce cast dramatic sunsets before sunset.",
    year: 2015,
    id: "utah",
  },
  {
    image: bryce_sunset,
    location: "Bryce Canyon National Park, UT",
    caption: "A sunset over Bryce Canyon National Park.",
    year: 2015,
  },
  {
    image: gorge,
    location: "Zion Canyon National Park, UT",
    caption: "A deep slot canyon carved out in Zion National Park. We canyoneered through a much thinner slot canyon later on the trip.",
    year: 2015,
  },
  {
    image: machu,
    location: "Machu Picchu, Peru",
    caption: "The legendary Incan ruins stretch out as the sun peeks over the neighboring mountains.",
    year: 2014,
    id: "peru",
  },
  {
    image: amazon_boats,
    location: "Tahuayo Lodge, Amazon Rainforest, Peru",
    caption: "We stand by two canoes at the lodge we stayed at in the Peruvian Amazon.",
    year: 2014,
  },
  {
    image: monkey,
    location: "Amazon River, Peru",
    caption: "A playful monkey climbs on top of my brother.",
    year: 2014,
  },
  {
    image: river_sunset,
    location: "Tahuayo Lodge, Amazon Rainforest, Peru",
    caption: "Pink clouds reflect on the water of the Amazon River outside of the lodge.",
    year: 2014,
  },
  {
    image: frog,
    location: "Amazon Rainforest, Peru",
    caption: "No idea what type of exotic frog this is perched on a tree in the Peruvian Amazon.",
    year: 2014,
  },
  {
    image: bachelor,
    location: "Mt. Bachelor Ski Resort, OR",
    caption: "Dramatic clouds overlook our ski day at Mt. Bachelor, my only ski trip out west.",
    year: 2014,
  },
  {
    image: cairn,
    location: "Vancouver, Canada",
    caption: "A cairn we built overlooking English Bay, captured prior to our Alaskan cruise.",
    year: 2013,
    id: "alaska",
  },
  {
    image: cruise_ship,
    location: "Alaskan Coast",
    caption: "The sun sets behind the Holland America MS Zaandam.",
    year: 2013,
  },
  {
    image: denali,
    location: "Denali National Park, AK",
    caption: "A view of the iconic Denali, the tallest mountain in North America.",
    year: 2013,
  },
  {
    image: dog,
    location: "Denali National Park, AK",
    caption: "A husky in Denali. We later had the chance to be pulled by these gorgeous dogs on a real bobsled.",
    year: 2013,
  },
  {
    image: eagle,
    location: "Ketchikan, AK",
    caption: "A Bald Eagle my dad captured on his camera swoops low over the Pacific, grasping a fish in its talons.",
    year: 2013,
  },
  {
    image: me_glacier,
    location: "Glacier Bay National Park, AK",
    caption: "There is a rope behind me preventing visitors from touching the glaciers. The rope must be moved back every year as the glacier melts.",
    year: 2013,
  },
  {
    image: glacier,
    location: "Glacier Bay National Park, AK",
    caption: "The glaciers in Glacier Bay National Park are shrinking at a dramatic pace, calving off ice into the ocean hundreds of times per day.",
    year: 2013,
  },
]

export default photos