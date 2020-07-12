/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { 
 PageContainer, TitleContainer, SubtitleContainer,
 PhotosContainer,
} from './styles'
import PhotoItem from '../../components/PhotoItem'

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

const photos = [
 {
   image: nevada_sunset,
   location: "Interstate 95 near Lovelock, NV",
   caption: "We camped a few miles off the highway in the Nevada desert on our 14-hour roadtrip from Jackson to San Fransisco.",
   year: 2020,
   id: "wyoming",
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
   caption: "The legendary Incan ruins stretch out as the sun peaks over the neighboring mountains.",
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
   caption: "A playful monkey climbs on top of my brother, Reuben.",
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

const Photos = () => {
  useEffect(() => {
   window.scrollTo(0,0)
  }, [])

  return (
    <PageContainer>
      <TitleContainer>
        <h1>{"TRAVEL & PHOTOS"}</h1>
      </TitleContainer>
      <SubtitleContainer>
        <h3>
        ⬅️ <Link to="/">back home</Link>&#8226;
        <a href="#wyoming">wyoming</a>&#8226;
        <a href="#utah">{"portugal & spain"}</a>&#8226;
        <a href="#utah">switzerland</a>&#8226;
        <a href="#utah">israel</a>&#8226;
        <a href="#utah">utah</a>&#8226;
        <a href="#peru">peru</a>&#8226;
        <a href="#alaska">alaska</a>
        </h3>
      </SubtitleContainer>
      <PhotosContainer>
        {
          photos.map(photo => (
            <PhotoItem 
              key={photo.caption}
              image={photo.image}
              location={photo.location}
              caption={photo.caption}
              year={photo.year}
              id={photo.id}
            />
          ))
        }
      </PhotosContainer>
    </PageContainer>
  )
}

export default Photos