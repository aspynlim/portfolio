import { useState } from 'react'
import BlogPostList from '../../../components/blogPosts/BlogPostList'

function AllBlogPosts() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedBlogPosts, setLoadedBlogPosts] = useState([])

  fetch(
    'https://react-blog-26569-default-rtdb.asia-southeast1.firebasedatabase.app/blogPosts.json'
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setIsLoading(false)
      setLoadedBlogPosts(data)
    })

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    )
  }

  return (
    <div>
      <BlogPostList items={loadedBlogPosts} />
    </div>
  )
}

export default AllBlogPosts
