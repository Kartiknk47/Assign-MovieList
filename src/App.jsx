import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import data from '../data';
import AddNewMovie from './components/AddNewMovie'
import MovieDetails from './components/MovieDetails'
import { MovieProvider } from './context/MovieContext'
import ThemeProvider from './context/ThemeContext'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
    {/* <NavBar/> */}
      <ThemeProvider>
    <MovieProvider>
      <BrowserRouter>
        {/* <Router> */}
          <Routes>
            <Route path='/' element={<MovieList />}></Route>
            <Route path='/add' element={<AddNewMovie />}></Route>
            <Route path='/movie-details/:ID/*' element={<MovieDetails/>}></Route>
          </Routes>
        {/* </Router> */}
      </BrowserRouter>
      </MovieProvider>
      </ThemeProvider>


      {/* <AddNewMovie/> */}


    </>
  )
}

export default App;
