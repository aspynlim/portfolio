import classes from './scss/MyHistory.module.scss'
import Card from '../../../components/ui/Card'

function MyHistory() {
  return (
    <div className={classes.container}>
      <div className={classes.actions}>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/15HpTG7r46jJYaHVN9AboThGg7f8iN895/view?usp=sharing"
          rel="Resume noreferrer"
        >
          <button className={classes.button}>이력서 다운로드</button>
        </a>
      </div>
      <p className={classes.title}>실무 경력</p>
      <div className={classes.experiences}>
        <Card>
          <div className={classes.experience}>
            <p className={classes.subtitle}>(주)모아데이타</p>
            <p className={classes.jobTitle}>기획자</p>
            <ul className={classes.jobResponsibilities}>
              <li>정부지원금 지원 총 책임자로서 총 8억원 수령에 기여</li>
              <li>헬스케어 서비스 앱 기획</li>
              <li>홈페이지 관리</li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className={classes.experience}>
            <p className={classes.subtitle}>성균관대학교</p>
            <p className={classes.jobTitle}>입학사정관</p>
            <ul className={classes.jobResponsibilities}>
              <li>‘2017 KinGo Global Program II 프로젝트’ 총괄 책임</li>
              <li>고등학교에서 입학설명회 및 교사간담회 진행</li>
              <li>대학 입학 지원서 평가</li>
            </ul>
          </div>
        </Card>
      </div>
      <p className={classes.title}>학력</p>
      <div className={classes.educationHistory}>
        <Card>
          <div className={classes.education}>
            <p className={classes.subtitle}>University of Rhode Island</p>
            <p className={classes.degree}>M.S. in College Student Personnel</p>
          </div>
        </Card>
        <Card>
          <div className={classes.education}>
            <p className={classes.subtitle}>Arizona State University</p>
            <p className={classes.degree}>Barret, the Honors College</p>
            <p className={classes.degree}>B.A. in Sustainability</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MyHistory
