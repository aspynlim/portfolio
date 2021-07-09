// import { createContext, useState } from 'react'
// import { BlogPost } from '../components/Interfaces/BlogPost'
// import { BlogPostArray } from '../components/Interfaces/BlogPostArray'

// const FavoritesContext = createContext({
//   favorites: [],
//   totalFavorites: 0,
//   addFavorite: (favoriteBlogPost: BlogPost) => {},
//   removeFavorite: (blogPostId: string) => {},
//   itemIsFavorite: (blogPostId: string) => {},
// })

// export function FavoritesContextProvider(props) {
//   console.log(props)
//   const [userFavoriates, setUserFavorites] = useState([])

//   function addFavoriteHandler(favoriteBlogPost) {
//     setUserFavorites((prevUserFavorites) => {
//       return prevUserFavorites.concat(favoriteBlogPost)
//     })
//   }

//   function removeFavoriteHandler(blogPostId: string) {
//     setUserFavorites((prevUserFavorites) => {
//       return prevUserFavorites.filter(
//         (blogPost: BlogPost) => blogPost.id !== blogPostId
//       )
//     })
//   }

//   function itemIsFavoriteHandler(blogPostId: string) {
//     return userFavoriates.some(
//       (blogPost: BlogPost) => blogPost.id === blogPostId
//     )
//   }

//   const context = {
//     favorites: userFavoriates,
//     totalFavorites: userFavoriates.length,
//     addFavorite: addFavoriteHandler,
//     removeFavorite: removeFavoriteHandler,
//     itemIsFavorite: itemIsFavoriteHandler,
//   }

//   return (
//     <FavoritesContext.Provider value={context}>
//       {props.children}
//     </FavoritesContext.Provider>
//   )
// }

// export default FavoritesContext
