import classes from './scss/BlogProject.module.scss'
import sass from '../../../dist/images/brandLogos/sass.svg'
import react from '../../../dist/images/brandLogos/react.svg'
import typescript from '../../../dist/images/brandLogos/typescript.svg'
import firebase from '../../../dist/images/brandLogos/firebase.svg'

function BlogProject() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Firebase API 연동 블로그 포스트</p>
      <div className={classes.fontAwesomeIcons}>
        <img src={react} alt="react" width="35" />
        <img src={typescript} alt="typescript" width="35" />
        <img src={firebase} alt="firebase" width="30" />
        <img src={sass} alt="sass" width="40" />
      </div>
      <ul className={classes.analysis}>
        <li>Form을 통해 Firebase에 내용 전송</li>
        <li>Firebase에서 내용 불러오기</li>
      </ul>
    </div>
  )
}

export default BlogProject
