import classes from './scss/CliftonStrengths.module.scss'
import Card from '../../../components/ui/Card'

function CliftonStrengths() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>성격</p>
      <div className={classes.strengths}>
        <Card>
          <div className={classes.strength}>
            <p className={classes.subtitle}>
              <a
                target="_blank"
                href="https://www.gallup.com/cliftonstrengths/en/252197/connectedness-theme.aspx"
                rel="Connectedness noreferrer"
              >
                Connectedness
              </a>
            </p>
            <p>
              <span className={classes.themeType}>카테고리 :</span>
              <span className={classes.theme}>Relationship Building</span>
            </p>
            <p>
              <span className={classes.definition}>정의 :</span>
              <span className={classes.explanation}>
                Help others see connections and purpose in everyday life.
              </span>
            </p>
            <ul className={classes.quote}>
              <li>&quot; Nothing happends by accident. &#34;</li>
              <li>&quot; Everything has a purpose. &#34;</li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className={classes.strength}>
            <p className={classes.subtitle}>
              <a
                target="_blank"
                href="https://www.gallup.com/cliftonstrengths/en/252278/input-theme.aspx"
                rel="Input noreferrer"
              >
                Input
              </a>
            </p>
            <p>
              <span className={classes.themeType}>카테고리 :</span>
              <span className={classes.theme}>Strategic Thinking</span>
            </p>
            <p>
              <span className={classes.definition}>정의 :</span>
              <span className={classes.explanation}>
                Keep exploring; always be curious
              </span>
            </p>
            <ul className={classes.quote}>
              <li>&quot; Especially great at absorbing information &#34;</li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className={classes.strength}>
            <p className={classes.subtitle}>
              <a
                target="_blank"
                href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx"
                rel="Restorative noreferrer"
              >
                Restorative
              </a>
            </p>
            <p>
              <span className={classes.themeType}>카테고리 :</span>
              <span className={classes.theme}>Execution</span>
            </p>
            <p>
              <span className={classes.definition}>정의 :</span>
              <span className={classes.explanation}>
                Remember that every problem has a solution. Find the answers.
              </span>
            </p>
            <ul className={classes.quote}>
              <li>
                &quot; Take something broken, and bring it back to their
                original working order &#34;
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className={classes.strength}>
            <p className={classes.subtitle}>
              <a
                target="_blank"
                href="https://www.gallup.com/cliftonstrengths/en/252320/responsibility-theme.aspx"
                rel="Responsibility noreferrer"
              >
                Responsibility
              </a>
            </p>
            <p>
              <span className={classes.themeType}>카테고리 :</span>
              <span className={classes.theme}>Execution</span>
            </p>
            <p>
              <span className={classes.definition}>정의 :</span>
              <span className={classes.explanation}>
                Take ownership for the things that matter most to you.
              </span>
            </p>
            <ul className={classes.quote}>
              <li>&quot; Make a progress, because I made a promise. &#34;</li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className={classes.strength}>
            <p className={classes.subtitle}>
              <a
                target="_blank"
                href="https://www.gallup.com/cliftonstrengths/en/252227/discipline-theme.aspx"
                rel="Discipline noreferrer"
              >
                Discipline
              </a>
            </p>
            <p>
              <span className={classes.themeType}>카테고리 :</span>
              <span className={classes.theme}>Execution</span>
            </p>
            <p>
              <span className={classes.definition}>정의 :</span>
              <span className={classes.explanation}>
                Create structure, and keep things organized
              </span>
            </p>
            <ul className={classes.quote}>
              <li>
                &quot; Have a natural talent to appreciate and create an order
                and a structure &#34;
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CliftonStrengths
