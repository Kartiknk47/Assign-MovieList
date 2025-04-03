import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { MovieContext } from "../context/MovieContext";
import { ThemeContext } from "../context/ThemeContext";
import "./MovieList.css";

const MovieList = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(MovieContext);
  const navigate = useNavigate();
  const [editMovie, setEditMovie] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleDelete = (id) => {
    dispatch({ type: "deleteMovie", payload: id });
  };

  const openEditModal = (movie) => {
    setEditMovie(movie);
    setNewTitle(movie.title);
    setNewDescription(movie.description);
  };

  const closeEditModal = () => {
    setEditMovie(null);
  };

  const handleSaveEdit = () => {
    if (newTitle.trim() && newDescription.trim()) {
      dispatch({
        type: "editMovie",
        payload: { id: editMovie.id, title: newTitle, description: newDescription },
      });
      closeEditModal();
    } else {
      alert("Both fields are required!");
    }
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, i) => (
      <IoStarSharp
        key={i}
        style={{
          color: i < rating ? "#FFD700" : "#ddd",
          fontSize: "20px",
          margin: "2px",
        }}
      />
    ));
  };

  const handleAddMovie = () => {
    navigate("/add");
  };

  return (
    <div className={`container-fluid ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} py-4`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center flex-grow-1">🎬 Movie List</h1>
        <button onClick={toggleTheme} className="btn btn-outline-primary ms-3" style={{ fontSize: "24px" }}>
          {theme === "light" ? <BsToggle2On /> : <BsToggle2Off />}
        </button>
      </div>

      <div className="row justify-content-center">
        {state.length === 0 ? (
          <h3 className="text-center text-muted">No movies available. Add some!</h3>
        ) : (
          state.map((movie) => (
            <div key={movie.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm movie-card h-100">
                <img 
                  src={movie.image} 
                  className="card-img-top" 
                  alt={movie.title} 
                  style={{ height: "500px", objectFit: "cover" }} 
                />
                <div className="card-body d-flex flex-column align-items-center justify-content-between" style={{ backgroundColor: "lightblue", minHeight: "200px" }}>
                  <h5 className="card-title text-center">{movie.title}</h5>
                  <div>{renderStars(movie.rating)}</div>
                  <div className="d-flex flex-column gap-2 w-100">
                    <Link to={`/movie-details/${movie.id}`} className="btn btn-primary btn-sm w-100">
                      Movie Details
                    </Link>
                    <button className="btn btn-success btn-sm w-100" onClick={() => openEditModal(movie)}>
                      Edit Movie
                    </button>
                    <button className="btn btn-danger btn-sm w-100" onClick={() => handleDelete(movie.id)}>
                      Delete Movie
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-warning btn-lg px-4" onClick={handleAddMovie}>
          + Add Movie
        </button>
      </div>

      {/* Edit Movie Modal */}
      {editMovie && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Movie</h5>
                <button type="button" className="close" onClick={closeEditModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Movie Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Movie Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeEditModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-success" onClick={handleSaveEdit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
