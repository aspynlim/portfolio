import { Link } from 'react-router-dom'
import logo from '../../dist/images/logo.svg'
import classes from './scss/MainNav.module.scss'

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/" className={classes.logoLink}>
              <img
                src={logo}
                alt="Website Logo"
                width="30"
                className={classes.logo}
              />
            </Link>
          </li>
          <div className={classes.rightList}>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about-me">About me</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
