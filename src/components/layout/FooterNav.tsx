import classes from './scss/FooterNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function FooterNav() {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hyejunglim/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/aspynlim"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default FooterNav
