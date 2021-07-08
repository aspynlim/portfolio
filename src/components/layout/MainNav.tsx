import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../dist/images/logo.svg'
import classes from './scss/MainNav.module.scss'
import ProjectsNav from './ProjectsNav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'

function MainNav() {
  const [isClicked, setIsClicked] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setIsClicked((prev) => !prev)
  const closeMobileMenu = () => setIsClicked(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.leftList}>
          <Link
            to="/"
            className={`${classes.logoLink} ${classes.navLinks}`}
            onClick={closeMobileMenu}
          >
            <img
              src={logo}
              alt="Website Logo"
              width="30"
              className={classes.logo}
            />
          </Link>
        </div>
        <div className={classes.hamburgerIcon} onClick={handleClick}>
          <FontAwesomeIcon icon={isClicked ? faTimes : faBars} />
        </div>
        <ul
          className={
            isClicked
              ? `${classes.navMenu} ${classes.active} ${classes.rightList}`
              : `${classes.navMenu} `
          }
        >
          <li
            className={classes.navItem}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/projects" onClick={closeMobileMenu}>
              <span className={classes.dropdownTitle}>Projects</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            {dropdown && <ProjectsNav />}
          </li>
          <li className={classes.navItem}>
            <Link to="/about-me" onClick={closeMobileMenu}>
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
