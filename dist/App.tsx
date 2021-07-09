import './dist/scss/styles.scss'
import { Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import ProjectsMain from './pages/ProjectsMain'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default App
