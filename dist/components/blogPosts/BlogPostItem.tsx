import classes from './scss/blogPostItem.module.scss'
import { BlogPost } from '../Interfaces/BlogPost'
import Card from '../ui/Card'

function blogPost(props: BlogPost) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  )
}

export default blogPost
