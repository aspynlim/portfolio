import classes from './scss/Card.module.scss'
import { CardProps } from '../Interfaces/CardProps'

function Card(props: CardProps) {
  return <div className={classes.card}>{props.children}</div>
}

export default Card
