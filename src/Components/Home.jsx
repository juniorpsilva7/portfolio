import React from 'react'
import Header from './shared/Header'
import Divider from './utils/Divider';
import NavMenu from './shared/NavMenu';
import AboutMe from './AboutMe';
import Experiences from './Experiences/ExperiencesSection';
import DividerWithText from './utils/DividerWithText';
import ProjectsSection from './Projects/ProjectsSection';
import EducationsSection from './Education/EducationsSection'
import Footer from './shared/Footer';
import { Element } from 'react-scroll';

export default function Home() {
  return (
    <div className='flex flex-col w-full md:min-w-fit min-h-screen bg-neutral-800'>
        <NavMenu />
        <Header />
        {/* <Divider /> */}
        <AboutMe />
        <Element name="projects" className="element"><DividerWithText text={"Projects"} /></Element>
        <ProjectsSection />
        <Element name="experiences" className="element"><DividerWithText text={"Experiences"} /></Element>
        <Experiences />
        <Element name="education" className="element"><DividerWithText text={"Education"} /></Element>
        <EducationsSection />
        <Divider />
        <Footer />
    </div>
  )
}
