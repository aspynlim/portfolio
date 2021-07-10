import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import classes from '../projects/scss/PapagoProject.module.scss'
import javascript from '../../dist/images/brandLogos/javascript.svg'
import java from '../../dist/images/brandLogos/java.svg'
import mariaDB from '../../dist/images/brandLogos/mariaDB.svg'
import jenkins from '../../dist/images/brandLogos/jenkins.svg'
import aws from '../../dist/images/brandLogos/aws.svg'

function PapagoProject() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>파파고 번역 프로젝트</p>
      <div className={classes.fontAwesomeIcons}>
        <img src={java} alt="java" width="50" />
        <img src={javascript} alt="javascript" width="30" />
        <img src={mariaDB} alt="mariaDB" width="50" />
        <img src={jenkins} alt="jenkins" width="30" />
        <img src={aws} alt="aws" width="35" />
      </div>
      <div className={classes.actions}>
        <a
          target="_blank"
          href="https://gitlab.com/aspynlim/jl-papago"
          rel="GitHub noreferrer"
          className={classes.socialMedia}
        >
          <button className={classes.button}>
            <FontAwesomeIcon icon={faGitlab} />
            <span>GitLab Repository</span>
          </button>
        </a>
      </div>
      <ul className={classes.analysis}>
        <li>네이버 파파고 API 연동</li>
        <li>회원가입</li>
        <li>Log In/Out</li>
        <li>DB에 데이터 추가 및 삭제</li>
        <li>단어 검색</li>
        <li>날짜별/사용자별/검색량별/언어별 정렬</li>
        <li>Jenkins 및 AWS로 Deploy</li>
      </ul>
    </div>
  )
}

export default PapagoProject
