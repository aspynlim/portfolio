import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import classes from '../scss/PapagoProject.module.scss'

function PapagoProject() {
  return (
    <div>
      <h1>Papago Project</h1>
      <a
        target="_blank"
        href="https://gitlab.com/aspynlim/jl-papago"
        rel="GitHub noreferrer"
        className={classes.socialMedia}
      >
        <FontAwesomeIcon icon={faGitlab} />
      </a>
    </div>
  )
}

export default PapagoProject
