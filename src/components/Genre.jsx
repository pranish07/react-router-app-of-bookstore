import React from 'react'
function Genre({src,name}) {
  return (
    <>
     <a className="category-product-link category card card-wt-badge" href="/books">
        <img src={src} alt={name} className="category-img"/>
        <div className="card-content">
          <h4 className="card-heading">{name}</h4>
        </div>
      </a>
    </>
  )
}

export default Genre