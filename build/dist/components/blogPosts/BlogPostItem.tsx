import classes from './scss/blogPost.module.scss'
import { BlogPost } from '../Interfaces/BlogPost'

function blogPost(props: BlogPost) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>FAVORITE</button>
      </div>
    </li>
  )
}

export default blogPost
