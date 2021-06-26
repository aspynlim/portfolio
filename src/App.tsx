import './scss/styles.scss'
import image from './images/react.png'
import bird from './images/bird.svg'
import { ClickCounter } from './components/ClickCounter'

export const App = () => {
  return (
    <>
      <h1>BYE! 123 Just do it!</h1>
      <h1>{process.env.NODE_ENV}</h1>
      <h1>{process.env.name}</h1>
      <img src={image} alt="React Logo" width="200" />
      <img src={bird} alt="Bird" width="200" />
      <ClickCounter />
    </>
  )
}
