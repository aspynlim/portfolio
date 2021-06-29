import BlogPostItem from './BlogPostItem'
import { BlogPost } from '../Interfaces/BlogPost'
import { BlogPostArray } from '../Interfaces/BlogPostArray'

function blogPostList(props: BlogPostArray) {
  return (
    <ul>
      {props.items.map((blogPost: BlogPost) => (
        <BlogPostItem
          key={blogPost.id}
          id={blogPost.id}
          image={blogPost.image}
          title={blogPost.title}
          description={blogPost.description}
        />
      ))}
    </ul>
  )
}

export default blogPostList
