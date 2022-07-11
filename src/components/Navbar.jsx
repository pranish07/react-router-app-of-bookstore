import React from 'react'
import {Link, Outlet} from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>BookStore!</h1>

<nav className="navbar">
  <Link to="/">Home</Link>
  <Link to="/books">Books</Link>
  <Link to="/cart">Cart</Link>
</nav>
{/* <Outlet /> */}
    </>
  )
}

export default Navbar