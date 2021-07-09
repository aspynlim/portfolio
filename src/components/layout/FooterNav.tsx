import classes from './scss/FooterNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'

function FooterNav() {
  return (
    <footer>
      <nav className={classes.navBar}>
        <div className={classes.leftNav}>
          <span>&#169; Hyejung(Aspyn) Lim 2021</span>
        </div>
        <ul className={classes.rightNav}>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hyejunglim/"
              rel="LinkedIn noreferrer"
              className={classes.socialMedia}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/aspynlim"
              rel="GitHub noreferrer"
              className={classes.socialMedia}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://medium.com/@aspynlim"
              rel="Medium noreferrer"
              className={classes.socialMedia}
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default FooterNav
