import classes from './scss/FooterNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function FooterNav() {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default FooterNav
