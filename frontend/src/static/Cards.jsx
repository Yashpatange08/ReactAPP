import React from "react";


export default function Cards(props) {
  return (
    <div className="container my-3 d-flex flex-wrap gap-3 ">
        {/* Card 1 */}
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://imgs.search.brave.com/avGa2Kz7y6dWuz3FrGiFafmsjEQZc8wLbvJX9K7x9-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTM5/MDM2MS5qcGc"
            className="card-img-top"
            alt="Black-tshirt"
          />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://imgs.search.brave.com/avGa2Kz7y6dWuz3FrGiFafmsjEQZc8wLbvJX9K7x9-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTM5/MDM2MS5qcGc"
            className="card-img-top"
            alt="Black-tshirt"
          />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        {/* Card 3 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://imgs.search.brave.com/avGa2Kz7y6dWuz3FrGiFafmsjEQZc8wLbvJX9K7x9-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTM5/MDM2MS5qcGc"
            className="card-img-top"
            alt="Black-tshirt"
          />
          <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
