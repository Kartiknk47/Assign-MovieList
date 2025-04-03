import React, { createContext, useReducer, useState, useEffect } from "react";
import Movies from "../../data";

export const initialState = [...Movies];

const MovieReducer = (state, action) => {
  switch (action.type) {
    case "addMovie":
      return [...state, { ...action.payload, id: Date.now() }];

    case "editMovie":
      return state.map((movie) =>
        movie.id === action.payload.id ? { ...movie, ...action.payload } : movie
      );

    case "deleteMovie":
      return state.filter((movie) => movie.id !== action.payload);

    default:
      return state;
  }
};

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <MovieContext.Provider value={{ state, dispatch, theme, toggleTheme }}>
      {children}
    </MovieContext.Provider>
  );
};
