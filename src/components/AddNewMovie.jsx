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

    // Update localStorage AFTER state change
    const updatedMovies = [...state, newMovie];
    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    setTitle("");
    setRating("");
    setDescription("");
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column align-items-center py-4">
      <div className="card p-4 shadow-lg bg-dark text-light w-50">
        <h3 className="text-center mb-4">🎬 Add New Movie</h3>

        <div className="mb-3">
          <label htmlFor="addTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control "
            id="addTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addRating" className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            id="addRating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addDescription" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="addDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-warning w-48" onClick={handleAddMovie}>Add Movie</button>
          <button className="btn btn-outline-light w-48" onClick={() => navigate("/")}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewMovie;
