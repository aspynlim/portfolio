import BlogPostItem from './BlogPostItem'
import { BlogPost } from '../Interfaces/BlogPost'
import { BlogPostArray } from '../Interfaces/BlogPostArray'
import classes from './scss/blogList.module.scss'

function BlogPostList(props: BlogPostArray) {
  return (
    <ul className={classes.container}>
      {props.items.map((blogPost: BlogPost) => (
        <BlogPostItem
          key={blogPost.id}
          id={blogPost.id}
          title={blogPost.title}
          description={blogPost.description}
        />
      ))}
    </ul>
  )
}

export default BlogPostList
