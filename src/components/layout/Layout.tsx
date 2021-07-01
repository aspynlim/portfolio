import classes from './scss/Layout.module.scss'
import MainNav from './MainNav'
import FooterNav from './FooterNav'
import { CardProps } from '../Interfaces/CardProps'

function Layout(props: CardProps) {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
      <FooterNav />
    </div>
  )
}

export default Layout
