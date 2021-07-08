import { useState, useEffect } from 'react'
import BlogPostList from '../../../components/blogPosts/BlogPostList'
import classes from './scss/AllBlogPosts.module.scss'

function AllBlogPosts() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedBlogPosts, setLoadedBlogPosts] = useState([])

  useEffect(() => {
    setIsLoading(true)

    fetch(
      'https://react-blog-26569-default-rtdb.asia-southeast1.firebasedatabase.app/blogPosts.json'
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const blogPosts = []

        for (const key in data) {
          const blogPost = {
            id: key,
            ...data[key],
          }

          blogPosts.push(blogPost)
        }

        setIsLoading(false)
        setLoadedBlogPosts(blogPosts)
      })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    )
  }

  return (
    <div className={classes.container}>
      <h1>Blog Posts</h1>
      <BlogPostList items={loadedBlogPosts} />
    </div>
  )
}

export default AllBlogPosts
