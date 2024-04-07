import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Character = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/character/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <div className="container">
        <div className="character-card">
          <h2>{data.name}</h2>
          <span>{data.description}</span>
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="character-card"
          />
        </div>
      </div>
    </main>
  );
};

export default Character;
