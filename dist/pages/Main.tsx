import classes from './scss/Main.module.scss'
import flower from '../dist/images/unsplash-sharon-pittaway.jpg'

function Main() {
  return (
    <div className={classes.mainBg}>
      <div className={classes.imgDiv}>
        <img src={flower} alt="Flower" width="600" />
      </div>
      <h1 className={classes.name}>Hyejung(Aspyn) Lim</h1>
      <p>
        &quot; 나의 과거는 결코 바꿀 수 없지만, 오늘 내 행동을 바꿈으로써 나의
        미래를 바꿀 수 있다 &#34;
      </p>
      <p className={classes.quoteAuthor}> - 폰더 씨의 위대한 하루</p>
    </div>
  )
}

export default Main
