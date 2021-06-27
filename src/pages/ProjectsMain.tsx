import { Route, Switch } from 'react-router-dom'

import Projects from './projects/Projects'
import BlogProjectMain from './projects/BlogProjectMain'
import PapagoProject from './projects/PapagoProject'
import PosInfluencesProject from './projects/PosInfluencesProject'

import ProjectsNav from '../components/layout/ProjectsNav'

function ProjectsMain() {
  return (
    <div>
      <ProjectsNav />
      <Switch>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/projects/blog">
          <BlogProjectMain />
        </Route>
        <Route path="/projects/papago">
          <PapagoProject />
        </Route>
        <Route path="/projects/posinfluences">
          <PosInfluencesProject />
        </Route>
      </Switch>
    </div>
  )
}

export default ProjectsMain
