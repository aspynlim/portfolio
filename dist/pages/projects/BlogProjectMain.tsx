import { Route, Switch } from 'react-router-dom'

import BlogProject from './blogProject/BlogProject'
import AllBlogPosts from './blogProject/AllBlogPosts'
import NewBlogPost from './blogProject/NewBlogPost'

import BlogProjectNav from '../../components/layout/BlogProjectNav'

function BlogProjectMain() {
  return (
    <div>
      <BlogProjectNav />
      <Switch>
        <Route path="/projects/blog" exact>
          <BlogProject />
        </Route>
        <Route path="/projects/blog/all">
          <AllBlogPosts />
        </Route>
        <Route path="/projects/blog/new">
          <NewBlogPost />
        </Route>
      </Switch>
    </div>
  )
}

export default BlogProjectMain
