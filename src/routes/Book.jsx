import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data";

import "./book.css";
function Book() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let book = getBook(parseInt(params.bookId, 10));
  return (
    <>
    {/* <div className="book-container"> */}
    <a href="/#"
      style={{
        width: "30%",
        margin: "1em",
        backgroundColor: "#f1f5f9",
        color:"black",
        borderRadius: "20px",
        display:"flex",
        flexDirection:"column",
        textDecoration:"none",
      }} 
      className="product-card card-vertical"
    >
      <div className="card-header">
        <img src={book.img} alt="" />
      </div>
      <div className="card-body">
      <div className="card-description">
        <h6 className="card-title">
        {" "}
        {book.number} : {book.name}
        </h6>
      </div>
      <div className="card-content">
      <p className="card-price">Price: {book.amount}</p>
      <div className="card-genres">
      <p className="list">Categories: {book.category}</p>
      </div>
      </div>
      </div>
      {/* <div className="card-cart"> */}
        <a href="/books" className="btn btn-primary card-cart"
          onClick={() => {
            deleteBook(book.number);
            navigate("/books" + location.search);
            
          }}
          
        >
          Delete
        </a>
        {/* </div> */}
      </a>
      {/* </div> */}
    </>
  );
}

export default Book;
