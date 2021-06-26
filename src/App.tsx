import "./scss/styles.scss";
import image from "./images/react.png";
import bird from "./images/bird.svg";

export const App = () => {
  return (
    <>
      <h1>HELLO! 123 Just do it!</h1>
      <h1>{process.env.NODE_ENV}</h1>
      <h1>{process.env.name}</h1>
      <img src={image} alt="React Logo" width="200" />
      <img src={bird} alt="Bird" width="200" />
    </>
  );
};
