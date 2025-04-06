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

  const handleBack = () => navigate("/");

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <IoStarSharp key={i} className={`star ${i < rating ? "filled" : ""}`} />
    ));
  };

  if (!movie) return <div className="text-center mt-5 text-light">Movie Not Found</div>;

  return (
    <div className="movie-details-container d-flex justify-content-center align-items-center">
      <div className="movie-card bg-dark text-light shadow-lg p-4 rounded">
        <img src={movie.image} alt={movie.title} className="movie-image mb-3 rounded" />
        <h2 className="mb-3 text-center">{movie.title}</h2>
        <p className="movie-description">{movie.description}</p>
        <div className="star-rating mb-4">{renderStars(movie.rating)}</div>
        <div className="text-center">
          <button className="btn btn-outline-danger" onClick={handleBack}>
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
