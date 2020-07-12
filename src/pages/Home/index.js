/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react' 
import { Link } from 'react-router-dom'

import Button from '../../components/Button'

import profileImage from '../../photos/profile.jpeg'

import { PageContainer, TitleContainer, SubtitleContainer, 
  AboutContainer, AboutText, ProfileImage, PortfolioContainer,
  PortfolioItems,
} from './styles'
import PortfolioItem from '../../components/PortfolioItem'

const Home = () => (
  <PageContainer>
    <TitleContainer>
      <h1>HI,</h1>
      <h1>I'M <span>NOAH COVEY 👋</span></h1>
    </TitleContainer>
    <SubtitleContainer>
      <h3>applied math + cs student <a href="https://harvard.edu" target="_blank" >@Harvard</a> and fullstack engineer <a href="http://hsadev.com" target="_blank">@HSA DEV</a></h3>
    </SubtitleContainer>
    <AboutContainer>
      <AboutText>
        <p>
          I'm Noah Covey 😄, a sophomore at Harvard College and a full-stack software engineer at Harvard Student Agencies' <a href="http://hsadev.com" target="_blank">DEV</a>,
          an entirely student-run web and mobile development startup. Previously, I've done research at the <a href="https://gtri.gatech.edu" target="_blank">Georgia Tech 
          Research Institute</a> and developed independent <a href="https://bit.ly/duskfall" target="_blank">mobile games</a> 🎮.
        </p>
        <p>
          I love playing <a href="https://youtu.be/DLCu5QLxaxc" target="_blank">piano</a> 🎹, learning guitar 🎸, writing and recording <a href="https://soundcloud.com/noahcovey" target="_blank">songs</a>, 
          and all things music 🎶. I love exploring the world and all the thrills it offers; from canoeing in the Amazon 🌴 to skydiving 🛩 in my hometown of Atlanta, 
          I'm always on the lookout for my next <Link to="/photos">adventure</Link>. I'm also a tennis player 🎾 and a diehard Atlanta Falcons fan 🏈.
        </p>
        <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank">
          <Button text="Résumé" />
        </a>
        
      </AboutText>
      <ProfileImage src={profileImage} />
    </AboutContainer>
    <PortfolioContainer>
      <h1>Check out some of my work 🖥</h1>
      <PortfolioItems>
        <PortfolioItem 
          title="Carrier Source" 
          description="Logistics platform for brokers to search through hundreds of thousands of trucking carriers, and for carriers to manage their reviews and company profile."
        />
        <PortfolioItem
          title="50Fifty"
          description="U.S. election predictions at all levels of government using machine learning, trained on data like demographics, past results, and fundraising."
          link="https://50fifty.us"
          highlight
        />
        <PortfolioItem
          title="Duskfall"
          description="Peaceful mobile game published by Nanovation Labs, featured on the App Store in 150+ countries, and 75,000 downloads."
          highlight
          link="https://bit.ly/duskfall"/>
        <PortfolioItem
          title="Gravity Dunk"
          description="Futuristic mobile game where players flip the world's gravity to avoid obstacles and score through hoops."
          link="https://youtu.be/cQI4p9Lu4NE"
        />
        <PortfolioItem
          title="Noah's A.R.C."
          description="Research project from my GTRI internship focused on augmented reality and AI planning systems."
          link="https://docs.google.com/presentation/d/1ZLuzBR29brpWwvfmvYAfs2gjG1Uxh84irEIGx9mhrGU/edit?usp=sharing"
        />
        <PortfolioItem
          title="FlyFall"
          description="My first mobile game: players fall through the air, timing their taps and tilts to avoid as many obstacles as possible."
          link="https://www.11alive.com/article/life/dunwoody-high-school-freshman-creates-5-star-app/68715508"
        />
        <PortfolioItem
          title="Colors of Atlanta"
          description="Documentary exploring controversies over public art in the U.S., with interviews with Atlanta artists, arts organizers, and city officials."
          link="https://youtu.be/AOi88VoEP7M"
        />
        <PortfolioItem
          title="Travel Photos"
          description="Select photos from some of my travel adventures around the country and world."
          link="/photos"
          internal
          />
      </PortfolioItems>
    </PortfolioContainer>
  </PageContainer>
)
  
export default Home