import { Link } from 'react-router-dom'

import classes from './scss/ProjectsNav.module.scss'

function ProjectsNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/projects">프로젝트</Link>
          </li>
          <div className={classes.rightList}>
            <li>
              <Link to="/projects/blog">블로그</Link>
            </li>
            <li>
              <Link to="/projects/papago">파파고 번역</Link>
            </li>
            <li>
              <Link to="/projects/posinfluences">선한영향력</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default ProjectsNav
