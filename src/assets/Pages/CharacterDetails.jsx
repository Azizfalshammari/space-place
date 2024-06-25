import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  document.title('character Details')

  useEffect(() => {
    axios
      .get(`https://finalspaceapi.com/api/v0/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={character.img_url}
          alt={character.name}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin}</p>
          <p>Abilities: {character.abilities.slice(0, 2).join(", ")}</p>
          <Link to={'/'}>
            <button className="btn btn-primary">Return</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
