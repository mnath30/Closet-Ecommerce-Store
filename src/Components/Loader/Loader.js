import ReactLoading from "react-loading";
import "./loader.css";

const Loader = () => {
  return (
    <ReactLoading type="spinningBubbles" color="#FA255E" className="loader" />
  );
};

export { Loader };
