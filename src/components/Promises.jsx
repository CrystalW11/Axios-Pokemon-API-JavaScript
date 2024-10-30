/** @format */

import { useEffect, useState } from "react";
import axios from "axios";

const Promises = () => {
  // Note the second argument is an empty array
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=150")
      .then((response) => {
        setResponseData(response.data.results);
        console.log("response --->", response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // This empty array forces useEffect to render ONLY when the component first renders

  return (
    <div className="container">
      {responseData.map((pokemon, index) => (
        <div key={index}>
          <ul className="list-style-type:disc">
            <li className="characters">{pokemon.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Promises;
