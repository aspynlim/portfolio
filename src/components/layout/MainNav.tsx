import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
