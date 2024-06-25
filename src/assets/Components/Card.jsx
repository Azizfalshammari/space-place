import React from "react";
import { Link } from "react-router-dom";

function Card({ id, Name, image, species, deleteItem }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-sm:w-[100%] text-wrap max-w-[30%] min-h-50">
      <figure>
        <img src={image} alt={Name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title break-words">{Name}</h2>
        <p className="break-words">{species}</p>
        <div className="card-actions justify-end">
          <Link to={`/character/${id}`} className="btn btn-info">Details</Link>
          <button onClick={() => deleteItem(id)} className="btn btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
