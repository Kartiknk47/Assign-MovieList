import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import "./AddNewMovie.css";

const AddNewMovie = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const { state, dispatch } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleAddMovie = () => {
    if (!title || !rating || !description) {
      alert("Please fill out all fields!");
      return;
    }

    const newMovie = { id: Date.now(), title, rating, description };
    dispatch({ type: "addMovie", payload: newMovie });

    const updatedMovies = [...state, newMovie];
    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    setTitle("");
    setRating("");
    setDescription("");
    navigate("/");
  };

  return (
    <div className="add-movie-container d-flex justify-content-center align-items-center">
      <div className="card p-5 shadow-lg bg-dark text-light form-card">
        <h2 className="text-center mb-4">🎬 Add New Movie</h2>

        <div className="mb-3">
          <label htmlFor="addTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="addTitle"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addRating" className="form-label">Rating (1 to 5)</label>
          <input
            type="number"
            className="form-control"
            id="addRating"
            placeholder="Give a rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="addDescription" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="addDescription"
            placeholder="Write a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <div className="button-group d-flex flex-wrap justify-content-between gap-2">
          <button className="btn btn-warning flex-grow-1" onClick={handleAddMovie}>Add Movie</button>
          <button className="btn btn-outline-light flex-grow-1" onClick={() => navigate("/")}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewMovie;
