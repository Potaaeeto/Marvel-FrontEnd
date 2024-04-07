import { Link } from "react-router-dom";

const Home = ({ bannerMarvel, comicsMarvel }) => {
  return (
    <main>
      <h1>WELCOME TO MARVEL'S UNIVERSE</h1>
      <div className="banner-imgs container">
        <Link className="parallelogram" to={"/characters"}>
          <img src={bannerMarvel} alt="banner-marvel" />
        </Link>
        <Link className="parallelogram-inverse" to={"/comics"}>
          <img src={comicsMarvel} alt="comics-marvel" />
        </Link>
      </div>
    </main>
  );
};

export default Home;
