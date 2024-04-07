import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?name=${search}&skip=${skip}&limit=${100}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search, skip]);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <div className="container">
        <div className="cards-container">
          {data.results.map((character) => {
            // console.log(character.name);
            return (
              <Link key={character._id} to={`/character/${character._id}`}>
                <article className="character-card">
                  <h2>{character.name}</h2>
                  <span>{character.description}</span>
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt="character-card"
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Characters;
