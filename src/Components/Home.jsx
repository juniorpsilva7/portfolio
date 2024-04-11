import React from 'react'
import Header from './shared/Header'
import Divider from './utils/Divider';
import NavMenu from './shared/NavMenu';
import AboutMe from './AboutMe';
import Experiences from './Experiences/ExperiencesSection';
import DividerWithText from './utils/DividerWithText';
import ProjectsSection from './Projects/ProjectsSection';

export default function Home() {
  return (
    <div className='flex flex-col w-full md:min-w-fit min-h-screen bg-neutral-800'>
        <NavMenu />
        <Header />
        {/* <Divider /> */}
        <AboutMe />
        <DividerWithText text={"Projects"} />
        <ProjectsSection />
        <DividerWithText text={"Experiences"} />
        <Experiences />
        <Divider />
    </div>
  )
}
