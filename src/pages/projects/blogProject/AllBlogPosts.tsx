const DUMMY_DATA = [
  {
    id: 'b1',
    title: 'JavaScript ES6 Tutorials',
    image:
      'https://unsplash.com/photos/ntX2TjKrzLc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    description:
      'Topics : Let, Default Parameters, Spread Operator, Template Strings, Object Literal Enhancements, New String Methods, Arrow Functions, Sets, Generators',
  },
  {
    id: 'b2',
    title: 'Asynchronous JavaScript',
    image:
      'https://unsplash.com/photos/ntX2TjKrzLc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    description:
      'Topics : Ajax Request, Callback Functions, Promises, Generators',
  },
  {
    id: 'b3',
    title: 'Object Oriented JavaScript',
    image:
      'https://unsplash.com/photos/ntX2TjKrzLc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    description:
      'Topics : Object Literals, Class Methods, Method Chaining, Class Inheritance, Constructors (under the hood), Prototype, Inheritance',
  },
]

function AllBlogPosts() {
  return (
    <div>
      <h1>All Blog Posts</h1>
      <ul>
        {DUMMY_DATA.map((blogPost) => {
          return <li key={blogPost.id}>{blogPost.title}</li>
        })}
      </ul>
    </div>
  )
}

export default AllBlogPosts
