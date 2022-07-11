import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./app.css";
import Genre from "./components/Genre";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div class="container">
     <Navbar />
      <header className="header-section parallax-image flex-row flex-justify-content-center flex-align-center">
        {/* <img src="http://localhost:3000/static/media/library-img.5cfe8ee0.jpg" alt="" /> */}
        <section className="hero-section flex-col flex-align-start py-5 px-3 flex-justify-content-center">
          <h2 className="hero-head text-light">
            One shop stop for all your book needs and moods.
          </h2>
          <h6 className="mt-1">
            <a href="/books" className="btn btn-primary">
              Shop Now
            </a>
          </h6>
        </section>
      </header>
      <section className="genre-container">
        <h1 className="genre-container-heading">
          Now, get your books delivered within 24 hours to your doorstep
        </h1>
        <div className="genre flex-col flex-justify-content-center flex-align-center">
          <h1>Popular Genre</h1>
          <p>Check out the popular genre we have to offer</p>

          <article className="category-container">
            <Genre
              name="Fiction"
              src="https://raw.githubusercontent.com/bharati-21/bookery/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/fiction.jpg"
            />
            <Genre
              name="Non-Fiction"
              src="https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/non-fiction.jpg?raw=true"
            />
            <Genre
              name="Thriller"
              src="https://images.unsplash.com/photo-1647530101594-e800c025f798?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80.jpg"
            />
            <Genre
              name="Mystery"
              src="https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/mystery.jpg?raw=true"
            />
            <Genre
              name="Fantasy"
              src="https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/fantasy.jpg?raw=true"
            />
            <Genre
              name="Classics"
              src="https://github.com/bharati-21/bookery/blob/7e9cd40067b78bf87a44450a4fed898fe3990705/assets/images/home-page/classics.jpg?raw=true"
            />
          </article>
        </div>
        <div className="mt-1">
          <a href="/books" className="btn btn-primary">
            Discover more genre
          </a>
        </div>
      </section>
      <section>
        {" "}
        <footer className="footer">
          Made by <strong>Pranish Shrestha</strong>
        </footer>
      </section>

      <Outlet />
    </div>
  );
}

export default App;
