import classes from './scss/projectsList.module.scss'

import Card from '../../components/ui/Card'

import javascript from '../../dist/images/brandLogos/javascript.svg'
import java from '../../dist/images/brandLogos/java.svg'
import mariaDB from '../../dist/images/brandLogos/mariaDB.svg'
import jenkins from '../../dist/images/brandLogos/jenkins.svg'
import aws from '../../dist/images/brandLogos/aws.svg'

import sass from '../../dist/images/brandLogos/sass.svg'
import react from '../../dist/images/brandLogos/react.svg'
import typescript from '../../dist/images/brandLogos/typescript.svg'
import firebase from '../../dist/images/brandLogos/firebase.svg'

import figma from '../../dist/images/brandLogos/figma.svg'

function ProjectsList() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Projects</p>
      <div className={classes.projects}>
        <Card>
          <div className={classes.project}>
            <p className={classes.subtitle}>Firebase API 연동 블로그 포스트</p>
            <div className={classes.fontAwesomeIcons}>
              <img src={react} alt="react" width="35" />
              <img src={typescript} alt="typescript" width="35" />
              <img src={firebase} alt="firebase" width="30" />
              <img src={sass} alt="sass" width="40" />
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.project}>
            <p className={classes.subtitle}>파파고 번역 프로젝트</p>
            <div className={classes.fontAwesomeIcons}>
              <img src={java} alt="java" width="50" />
              <img src={javascript} alt="javascript" width="30" />
              <img src={mariaDB} alt="mariaDB" width="50" />
              <img src={jenkins} alt="jenkins" width="30" />
              <img src={aws} alt="aws" width="35" />
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.project}>
            <p className={classes.subtitle}>
              &lsquo;선한영향력&rsquo; 웹 앱 UX 디자인
            </p>
            <div className={classes.fontAwesomeIconsSingle}>
              <img src={figma} alt="figma" width="30" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ProjectsList
