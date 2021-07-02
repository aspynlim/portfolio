import classes from './scss/CliftonStrengths.module.scss'

function CliftonStrengths() {
  return (
    <div className={classes.container}>
      <div>
        <h3>
          <a
            target="_blank"
            href="https://www.gallup.com/ch2ftonstrengths/en/252197/connectedness-theme.aspx"
            rel="Connectedness noreferrer"
          >
            Connectedness
          </a>
        </h3>
        <p className={classes.category}>Relationship Building</p>
        <p className={classes.explanation}>
          Help others see connections and purpose in everyday life.
        </p>
        <ul className={classes.quote}>
          <li>&quot; Nothing happends by accident. &#34;</li>
          <li>&quot; Everything has a purpose. &#34;</li>
        </ul>
      </div>
      <div>
        <h3>
          <a
            target="_blank"
            href="https://www.gallup.com/cliftonstrengths/en/252278/input-theme.aspx"
            rel="Input noreferrer"
          >
            Input
          </a>
        </h3>
        <p className={classes.category}>Strategic Thinking</p>
        <p className={classes.explanation}>Keep exploring; always be curious</p>
        <ul className={classes.quote}>
          <li>&quot; Especially great at absorbing information &#34;</li>
        </ul>
      </div>
      <div>
        <h3>
          <a
            target="_blank"
            href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx"
            rel="Restorative noreferrer"
          >
            Restorative
          </a>
        </h3>
        <p className={classes.category}>Execution</p>
        <p className={classes.explanation}>
          Remember that every problem has a solution. Find the answers.
        </p>
        <ul className={classes.quote}>
          <li>
            &quot; Take something broken, and bring it back to their original
            working order &#34;
          </li>
        </ul>
      </div>
      <div>
        <h3>
          <a
            target="_blank"
            href="https://www.gallup.com/cliftonstrengths/en/252320/responsibility-theme.aspx"
            rel="Responsibility noreferrer"
          >
            Responsibility
          </a>
        </h3>
        <p className={classes.category}>Execution</p>
        <p className={classes.explanation}>
          Take ownership for the things that matter most to you.
        </p>
        <ul className={classes.quote}>
          <li>&quot; Make a progress, because I made a promise. &#34;</li>
        </ul>
      </div>
      <div>
        <h3>
          <a
            target="_blank"
            href="https://www.gallup.com/cliftonstrengths/en/252227/discipline-theme.aspx"
            rel="Discipline noreferrer"
          >
            Discipline
          </a>
        </h3>
        <p className={classes.category}>Execution</p>
        <p className={classes.explanation}>
          Create structure, and keep things organized
        </p>
        <ul className={classes.quote}>
          <li>
            &quot; Have a natural talent to apperciate and create an order and a
            structure &#34;
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CliftonStrengths
