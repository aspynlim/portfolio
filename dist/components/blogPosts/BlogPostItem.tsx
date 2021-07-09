import classes from './scss/blogPost.module.scss'
import { BlogPost } from '../Interfaces/BlogPost'
import Card from '../ui/Card'

function blogPost(props: BlogPost) {
  return (
    <li className={classes.item}>
      <Card>
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
      </Card>
    </li>
  )
}

export default blogPost
