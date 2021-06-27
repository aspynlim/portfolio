import './dist/scss/styles.scss'
import { Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
      </Switch>
    </div>
  )
}

export default App
