import classes from './scss/PosInfluencesProject.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import figma from '../../dist/images/brandLogos/figma.svg'

function PosInfluencesProject() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>&lsquo;선한영향력&rsquo; 웹 앱 UX 디자인</p>
      <div className={classes.fontAwesomeIcons}>
        <img src={figma} alt="figma" width="30" />
      </div>
      <div className={classes.actions}>
        <a
          target="_blank"
          href="https://bit.ly/UXanalysis2021"
          rel="UX Analysis noreferrer"
        >
          <button className={classes.button}>선한영향력 Web App UX 분석</button>
        </a>
      </div>
      <ul className={classes.analysis}>
        <li>사용자 페르소나</li>
        <li>사용자 공감 지도</li>
        <li>통찰력 체계화</li>
        <li>사용자 사용 경로 지도</li>
        <li>서비스 청사진</li>
      </ul>
      <div className={classes.actions}>
        <a
          target="_blank"
          href="https://bit.ly/posInfluences"
          rel="선한영향력 Web app portfolio noreferrer"
        >
          <button className={classes.button}>
            <FontAwesomeIcon icon={faFigma} />
            <span>선한영향력 Web app 프로토타입</span>
          </button>
        </a>
      </div>
      <ul className={classes.analysis}>
        <li>결식아동 version</li>
        <li>서비스 제공자 version</li>
      </ul>
    </div>
  )
}

export default PosInfluencesProject
