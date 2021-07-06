// import { useContext } from 'react'
import classes from './scss/blogPost.module.scss'
import { BlogPost } from '../Interfaces/BlogPost'
import Card from '../ui/Card'
// import FavoritesContext from '../../store/favorites-context'

function blogPost(props: BlogPost) {
  // const favoritesCtx = useContext(FavoritesContext)
  // const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  // function toggleFavoritesStatusHandler() {
  //   if (itemIsFavorite) {
  //     favoritesCtx.removeFavorite(props.id)
  //   } else {
  //     favoritesCtx.addFavorite({
  //       id: props.id,
  //       title: props.title,
  //       description: props.description,
  //     })
  //   }
  // }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        {/* <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? 'REMOVE' : 'FAVORITE'}
          </button>
        </div> */}
      </Card>
    </li>
  )
}

export default blogPost
