import Animals from "../Components/Animals";
import { useEffect, useState } from "react";
import axios from "axios";

const View = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/animals")
      .then((response) => {
        console.log("Fetched animals:", response.data.animals);
        setAnimals(response.data.animals);
      })
      .catch((error) => {
        console.error("Error fetching animals:", error);
      });
  }, []); 

  return (
    <div className="container">
      <div className="row justify-content-center" style={{width: '100%'}}>
        <div className="col-md-8 text-center" style={{margin: '1rem'}}>
          <h3>Animal List</h3>
          <Animals myAnimals={animals} />
        </div>
      </div>
    </div>
  );
};

export default View;
