import '../styles/components/MainContent.sass'
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TecnogiesContainer from './TechnologiesContainer'


function MainContent(){
  return(
    <main id='main-content' >
     <AboutContainer/>
     <TecnogiesContainer/>
     <ProjectsContainer/>
    </main>
  )
}

export default MainContent