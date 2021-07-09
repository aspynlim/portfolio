import CliftonStrengths from './projects/aboutMe/CliftonStrengths'
import MyHistory from './projects/aboutMe/MyHistory'
import classes from './scss/AboutMe.module.scss'

function AboutMe() {
  return (
    <div className={classes.container}>
      <MyHistory />
      <CliftonStrengths />
    </div>
  )
}

export default AboutMe

// https://pspdfkit.com/blog/2018/open-pdf-in-react/
