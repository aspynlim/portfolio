import { BlogPost } from './BlogPost'

export interface BlogPostArray extends BlogPost {
  items: BlogPost[]
}
