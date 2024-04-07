import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?title=${search}&skip=${skip}&limit=${100}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [skip, search]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <main>
        <div className="container">
          <div className="cards-container">
            {data.results.map((comic) => {
              return (
                <Link key={comic._id} to={`/comic/${comic._id}`}>
                  <article className="comic-card">
                    <h2>{comic.title}</h2>
                    <span>{comic.description}</span>
                    <img
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      alt="comic-card"
                    />
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Comics;
