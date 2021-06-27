import './dist/scss/styles.scss'
import { Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import ProjectsMain from './pages/ProjectsMain'

import MainNav from './components/layout/MainNav'

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/projects">
          <ProjectsMain />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
      </Switch>
    </div>
  )
}

export default App
