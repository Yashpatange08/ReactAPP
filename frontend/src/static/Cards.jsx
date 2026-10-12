// import React from "react";
// // import PropTypes from 'prop-types';

export default function Cards({imageSrc=defaultImg}) {
  return (
    <article className="product-card">
      <img
        src={imageSrc}
        className="product-card-image"
        alt="Black T-shirt"
      />

      <div className="product-card-body">
        <p className="product-category">Streetwear</p>
        <h2 className="product-title">Classic Black Tee</h2>
        <p className="product-description">
          An everyday essential with a relaxed fit and clean look.
        </p>
        <a href="/" className="product-button">
          View product
        </a>
      </div>
    </article>
  );
}
const defaultImg =
  "https://imgs.search.brave.com/avGa2Kz7y6dWuz3FrGiFafmsjEQZc8wLbvJX9K7x9-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTM5/MDM2MS5qcGc";