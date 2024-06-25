import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

function LandingPage() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://finalspaceapi.com/api/v0/character")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteItem = (id) => {
    setData(Data.filter((character) => character.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap w-full bg-slate-600 p-3 gap-2 justify-center items-center">
        {Data.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            Name={element.name}
            image={
              element.img_url === ""
                ? "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                : element.img_url
            }
            species={element.species}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </>
  );
}

export default LandingPage;
