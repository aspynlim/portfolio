import { Link } from 'react-router-dom'

import classes from './scss/BlogProjectNav.module.scss'

function BlogProjectNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/projects/blog">Blog</Link>
          </li>
          <div className={classes.rightList}>
            <li>
              <Link to="/projects/blog/all">All</Link>
            </li>
            <li>
              <Link to="/projects/blog/new">NEW</Link>
            </li>
            <li>
              <Link to="/projects/blog/favorites">Favorites</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default BlogProjectNav
