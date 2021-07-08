import { useHistory } from 'react-router'
import classes from './scss/NewBlog.module.scss'
import NewBlogPostForm from '../../../components/blogPosts/NewBlogPostForm'

function NewBlogPost() {
  const history = useHistory()

  function addBlogPostHandler(blogPostData) {
    fetch(
      'https://react-blog-26569-default-rtdb.asia-southeast1.firebasedatabase.app/blogPosts.json',
      {
        method: 'POST',
        body: JSON.stringify(blogPostData),
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/projects/blog/all')
    })
  }

  return (
    <section className={classes.container}>
      <h1>Add New Blog Post</h1>
      <NewBlogPostForm onAddBlogPost={addBlogPostHandler} />
    </section>
  )
}

export default NewBlogPost
