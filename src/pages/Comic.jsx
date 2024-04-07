import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Comic = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comic/${id}`);
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
        <div className="comic-card">
          <h2>{data.title}</h2>
          <span>{data.description}</span>
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="comic-card"
          />
        </div>
      </div>
    </main>
  );
};

export default Comic;
