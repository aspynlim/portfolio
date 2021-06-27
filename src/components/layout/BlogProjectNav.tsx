import { Link } from 'react-router-dom'

import classes from './BlogProjectNav.module.scss'

function BlogProjectNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/projects/blog">Blog Project</Link>
          </li>
          <li>
            <Link to="/projects/blog/all">All</Link>
          </li>
          <li>
            <Link to="/projects/blog/new">NEW</Link>
          </li>
          <li>
            <Link to="/projects/blog/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default BlogProjectNav
