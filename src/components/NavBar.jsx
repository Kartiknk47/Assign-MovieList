import React, { useState } from "react";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search query:", search);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100 shadow">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline ml-auto" onSubmit={handleSearch}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* Adding margin to prevent content overlap */}
      <div className="mt-5 pt-4"></div>
    </>
  );
};

export default NavBar;
