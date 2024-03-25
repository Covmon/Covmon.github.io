/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react' 
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

import Button from '../../components/Button'

import profileImage from '../../photos/profile.jpeg'

import { PageContainer, TitleContainer, SubtitleContainer, 
  AboutContainer, AboutText, ProfileImage, PortfolioContainer,
  PortfolioItems, ContactContainer, Socials, Footer, Buttons,
} from './styles'
import PortfolioItem from '../../components/PortfolioItem'

const Home = () => (
  <PageContainer>
    <TitleContainer>
      <h1>HI,</h1>
      <h1>I'M <span>NOAH COVEY 👋</span></h1>
    </TitleContainer>
    <SubtitleContainer>
      <h3>applied math, cs, and statistics student <a href="https://harvard.edu" target="_blank" >@Harvard</a></h3>
    </SubtitleContainer>
    <AboutContainer>
      <AboutText>
        <p>
          I'm Noah Covey 😄, a senior at Harvard College. Most recently, I was a Strategy and Product Intern at <a href="https://janestreet.com" target="_blank">Jane Street</a>, 
          the high-tech quantitative trading firm. I love building things, and have worked for and plan to work on
          startups. I'm extremely interested in in machine learning and data science; my current favorite class
          is <a href="https://mit-6861.github.io/" target="_blank">Quant Methods for NLP at MIT</a>.
        </p>
        <p>
          I served as President of <a href="https://harvardventures.org" target="_blank">Harvard Ventures</a>, Harvard's largest 
          entrepreneurship club. During my tenure, I started an annual NYC Summit, brought speakers including Vinod Khosla (Khosla Ventures), 
          Sarah Leary (Nextdoor), Spencer Rascoff (Zillow), and John Capodilupo (Whoop) to campus, and through our accelerator VentureWorks supported over a dozen teams, 
          leading to multiple YC acceptances and 2 Thiel Fellows.
        </p>
        <p>
          Previously, I did fullstack engineering at <a href="https://mercury.com" target="_blank">Mercury</a>.
          Over my gap year, I was the interim CTO at <a href="http://carriersource.io" target="_blank">CarrierSource</a>,
          an early-stage logistics startup whose goal is to bring transparency and intelligence to the freight industry through reviews, big data, and user-centric design.
        </p>
        <p>
          I love playing <a href="https://youtu.be/DLCu5QLxaxc" target="_blank">piano</a> 🎹 and guitar 🎸, writing and
          recording <a href="https://soundcloud.com/noahcovey" target="_blank">songs</a>, 
          and <a href="https://drive.google.com/file/d/1WV7v1rJ9vIGJTrodmOHJHZIZxipVSuHS/view?usp=share_link" target="_blank">performing music.</a> (My 
          band's EP is <a href="https://li.sten.to/P47HgTi" target="_blank">streaming now!</a>).
          I'm also a tennis player 🎾 and a diehard Atlanta Falcons fan 🏈.
        </p>
        <Buttons>
          <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank">
            <Button text="Resumé" />
          </a>
          <a href="#contact">
            <Button text="Contact" />
          </a>
        </Buttons>
        
      </AboutText>
      <ProfileImage src={profileImage} />
    </AboutContainer>
    <PortfolioContainer>
      <h1>Check out some of my work 🖥</h1>
      <PortfolioItems>
        <PortfolioItem
          title="Dante Commentary Hub"
          description="Collaborative commentary on the Divine Comedy, featuring cross-canto highlights, replies, canto-speciifc artwork, and more."
          link="https://divine-comedy-commentary-hub.web.app/"
          highlight
          smallTitle
        />
        <PortfolioItem
          title="Mercury x GSuite"
          description="Implemented full-stack Google integration for Google, allowing startups to bulk-invite and issue credit cards to their employees."
          link="https://drive.google.com/file/d/1tINAuD7rUz4noLDoVEHeCpBSlS03YVls/view?usp=sharing"
          highlight
        />
        <PortfolioItem 
          title="CarrierSource" 
          description="Logistics platform for brokers to search through hundreds of thousands of trucking carriers, and for carriers to manage their reviews and company profile."
          link="https://carriersource.io"
          highlight
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
        {/* <PortfolioItem
          title="Colors of Atlanta"
          description="Documentary exploring controversies over public art in the U.S., with interviews with Atlanta artists, arts organizers, and city officials."
          link="https://youtu.be/AOi88VoEP7M"
        /> */}
        {/* <PortfolioItem
          title="Travel Photos"
          description="Select photos from some of my travel adventures around the country and world."
          link="/photos"
          internal
          /> */}
      </PortfolioItems>
    </PortfolioContainer>
    <ContactContainer id="contact">
      <h1>Contact me ☎️</h1>
      <h3>✉️ <a href="mailto:ncovey@college.harvard.edu">ncovey@college.harvard.edu</a></h3>
      <Socials>
        <SocialIcon url="https://linkedin.com/in/noahcovey" fgColor="#fff" />
        <SocialIcon url="https://github.com/covmon" bgColor="#2cc9b0" fgColor="#fff" />
        <SocialIcon url="https://instagram.com/noahcovey1" bgColor="#DD2A7B" fgColor="#fff" />
        <SocialIcon url="https://twitter.com/noah_covey" fgColor="#fff" />
        <SocialIcon url="https://soundcloud.com/noahcovey" fgColor="#fff" />
      </Socials>
    </ContactContainer>
    <Footer>
      designed and built by me // last updated Mar 2024
    </Footer>
  </PageContainer>
)
  
export default Home