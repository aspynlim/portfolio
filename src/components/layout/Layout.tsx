import classes from './scss/MainNav.module.scss'
import MainNav from './MainNav'
import { CardProps } from '../Interfaces/CardProps'

function Layout(props: CardProps) {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout
