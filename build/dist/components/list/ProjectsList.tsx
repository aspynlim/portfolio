import classes from './scss/projectsList.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faSass,
  faJs,
  faJava,
  faAws,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'

function ProjectsList() {
  return (
    <div className={classes.container}>
      <h1>Projects</h1>
      <ul>
        <li>
          <h3>블로그</h3>
          <div className={classes.fontAwesomeIcons}>
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faSass} />
            <span>TypeScript</span>
          </div>
        </li>
        <li>
          <h3>파파고 번역</h3>
          <div className={classes.fontAwesomeIcons}>
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faJava} />
            <FontAwesomeIcon icon={faSass} />
            <FontAwesomeIcon icon={faAws} />
          </div>
        </li>
        <li>
          <h3>선한영향력</h3>
          <div className={classes.fontAwesomeIcons}>
            <FontAwesomeIcon icon={faFigma} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProjectsList
