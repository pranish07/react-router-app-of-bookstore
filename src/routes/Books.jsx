import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getBooks } from "../data";
import "./book.css"

function Books() {
  let books = getBooks();
  let [searchParams,setSearchParams]= useSearchParams();

  return (
    <>
    <Navbar />
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input value={searchParams.get("filter") || ""} 
        onChange={(event)=>{
            let filter = event.target.value;
            if(filter){
                setSearchParams({filter});
            }else{
                setSearchParams({});
            }
        }}
        />

        {books.filter((book)=>{
            let filter = searchParams.get("filter");
            if(!filter) return true;
            let name = book.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
        })
        
        .map((book) => (
          <NavLink
            style={({isActive}) => {
              return {
                textDecoration:"none",
                padding:".5em",
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "black",
                width:"200px"
              };
            }}
            to={`/books/${book.number}`}
            key={book.number}
          >
            {book.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
    </>
  );
}

export default Books;
