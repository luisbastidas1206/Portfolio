import { Box } from '@mui/material'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import { useRef } from 'react'


function App() {

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }

  const homeScroll = () => { scrollTo(homeRef) }
  const aboutScroll = () => { scrollTo(aboutRef) }
  const skillsScroll = () => { scrollTo(skillsRef) }
  const projectsScroll = () => { scrollTo(projectsRef) }
  const contactScroll = () => { scrollTo(contactRef) }

  return (
    <Box>
      <NavBar contactScroll={contactScroll} projectsScroll={projectsScroll} skillsScroll={skillsScroll} aboutScroll={aboutScroll} homeScroll={homeScroll}/>
      <Home componentRef={homeRef}/>
      <About componentRef={aboutRef}/>
      <Skills componentRef={skillsRef}/>
      <Projects componentRef={projectsRef}/>
      <Contact componentRef={contactRef}/>
    </Box>
  )
}

export default App
