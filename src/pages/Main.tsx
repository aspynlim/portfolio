import classes from './scss/Main.module.scss'
import flower from '../dist/images/unsplash-sharon-pittaway.jpg'

function Main() {
  return (
    <div className={classes.mainBg}>
      <div className={classes.imgDiv}>
        <img src={flower} alt="Flower" width="600" />
      </div>
      <h1>Hyejung(Aspyn) Lim</h1>
      <p></p>
    </div>
  )
}

export default Main
