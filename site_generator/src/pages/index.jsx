import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/brendon.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Brendon Page.
        </BigTitle>
        <Subtitle>I love TDD, engaging with the community, teaching and learning.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Personal Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Durban Agile User Group"
            link="https://www.meetup.com/Durban-Agile-User-Group-Meetup/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is the local user group that I contribute to.
          </ProjectCard>
          <ProjectCard
            title="Code Retreat South Africa"
            link="https://www.meetup.com/coderetreat/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            South African Code Retreat meetup that I'm involved in.
          </ProjectCard>
          <ProjectCard
            title="TDD Buddy"
            link="https://tddbuddy.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A site that my friend Travis Frisinger runs that has a bunch of great TDD resources.
          </ProjectCard>
          <ProjectCard
            title="Corners"
            link="https://gam.fitbit.com/gallery/clock/58216eb0-b4f0-4f94-8aef-384bf35ca155"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A fitbit watch face that I made.
          </ProjectCard>
          <ProjectCard
            title="Hexagons"
            link="https://gam.fitbit.com/gallery/clock/a6ed4a7f-45f7-4ed8-9961-b8ce660b86a3"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A gamified fitbit watch face that I made.
          </ProjectCard>
          <ProjectCard
            title="Slide Desks"
            link="https://www.slideshare.net/brendonpage/presentations"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            The slide decks for all the talks I've given over the years.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Brendon Page" />
          <AboutSub>
            Software Developer, Trainer, Team Lead and Delivery Manager at{' '}
            <a href="http://www.chillisoft.co.za">Chillisoft</a>.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm passionate about writing software, in a sustainable way, that solves real problems. An avid TDD'er, love
          to teach and spend a lot of my spare time speaking at or running dev focused community events. Lately a lot of
          my thinking has been around how to be better at writing software with a primary focus on the thought process
          of the developers themselves.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:brendonpage@live.co.za">Hi</a> or find me on{' '}
            <a href="https://twitter.com/brendonpaginate">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Brendon Page.</Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
