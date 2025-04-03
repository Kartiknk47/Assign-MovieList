import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data";
import "./MovieDetails.css";
import { IoStarSharp } from "react-icons/io5";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { ID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedMovie = data.find((m) => m.id === Number(ID));
    setMovie(selectedMovie);
  }, [ID]);

  if (!movie) {
    return <p>Movie Not Found</p>;
  }
  const HandleBack = () => {
    navigate("/");
  };
  const renderStars = (rating) => {
    let totalStars = 5;
    let stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <IoStarSharp
          key={i}
          style={{ color: i < rating ? "yellow" : "white" }}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div
        className="container-fluid shadow"
        style={{ backgroundColor: "black" }}
      >
        <img src={movie.image} className="ImgTwo"></img>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <div>{renderStars(movie.rating)}</div>
        <button type="button" className="btn btn-danger" onClick={HandleBack}>
          Back To Home
        </button>
      </div>
    </>
  );
};

export default MovieDetails;
