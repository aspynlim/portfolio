import { Route, Switch } from 'react-router-dom'

import BlogProject from './blogProject/BlogProject'
import AllBlogPosts from './blogProject/AllBlogPosts'
import NewBlogPost from './blogProject/NewBlogPost'
// import FavoriteBlogPosts from './blogProject/FavoriteBlogPosts'

import BlogProjectNav from '../../components/layout/BlogProjectNav'
// import { FavoritesContextProvider } from '../../store/favorites-context'

function BlogProjectMain() {
  return (
    <div>
      {/* <FavoritesContextProvider> */}
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
        {/* <Route path="/projects/blog/favorites">
            <FavoriteBlogPosts />
          </Route> */}
      </Switch>
      {/* </FavoritesContextProvider> */}
    </div>
  )
}

export default BlogProjectMain
