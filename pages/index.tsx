import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import AboutMeSection from '../components/AboutMeSection'
import Header from '../components/Header'
import { JobsSection } from '../components/JobsSection'
import MainSection from '../components/MainSection'
import ProjectsSection from '../components/ProjectsSection'
import { SocialItems } from '../components/socialItems'
import { Body } from './styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Header />
        <div className="SectionContent">
          <MainSection />

          <AboutMeSection />
          <JobsSection />
          <ProjectsSection />
        </div>

        <SocialItems />
      </Body>
    </>
  )
}

export default Home
