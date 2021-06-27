import { Link } from 'react-router-dom'

import classes from './scss/MainNav.module.scss'

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <div className={classes.rightList}>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
