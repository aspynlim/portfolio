import { useState } from 'react'

import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import classes from './scss/ProjectsNav.module.scss'

function ProjectsNav() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => setIsClicked((prev) => !prev)

  return (
    <header>
      <nav>
        <ul
          onClick={handleClick}
          className={
            isClicked
              ? `${classes.dropdownMenu} ${classes.clicked}`
              : `${classes.dropdownMenu} `
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.className}
                  to={item.path}
                  onClick={() => setIsClicked(false)}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default ProjectsNav
