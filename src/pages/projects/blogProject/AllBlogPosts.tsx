import BlogPostList from '../../../components/blogPosts/BlogPostList'
import { BlogPost } from '../../../components/Interfaces/BlogPost'

const DUMMY_DATA: BlogPost[] = [
  {
    id: 'b1',
    title: 'JavaScript ES6 Tutorials',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    description:
      'Topics : Let, Default Parameters, Spread Operator, Template Strings, Object Literal Enhancements, New String Methods, Arrow Functions, Sets, Generators',
  },
  {
    id: 'b2',
    title: 'Asynchronous JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    description:
      'Topics : Ajax Request, Callback Functions, Promises, Generators',
  },
  {
    id: 'b3',
    title: 'Object Oriented JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    description:
      'Topics : Object Literals, Class Methods, Method Chaining, Class Inheritance, Constructors (under the hood), Prototype, Inheritance',
  },
]

function AllBlogPosts() {
  return (
    <div>
      <h1>All Blog Posts</h1>
      <BlogPostList items={DUMMY_DATA} />
    </div>
  )
}

export default AllBlogPosts
