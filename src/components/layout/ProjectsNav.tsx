import { Link } from 'react-router-dom'

function ProjectsNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/projects/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/projects/papago">Papago</Link>
          </li>
          <li>
            <Link to="/projects/posinfluences">선한영향력</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default ProjectsNav
