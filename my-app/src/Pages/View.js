import Animals from "../Components/Animals";
import { useEffect, useState } from "react";
import axios from "axios";

const View = () => {
  // State to store fetched animals
  const [animals, setAnimals] = useState([]);

  // Function to reload animal data from the server
  const ReloadData = () => {
    console.log("Reloading animal data...");
    axios.get("http://localhost:4000/api/animals")
      .then((response) => {
        console.log("Fetched animals:", response.data.animals);
        setAnimals(response.data.animals);  // Update state with fetched animals
      })
      .catch((error) => {
        console.error("Error fetching animals:", error);  // Log any errors
      });
  };

  // Use effect to fetch data on component mount
  useEffect(() => {
    ReloadData();
  }, []);  // Empty dependency array ensures it runs only once on mount

  return (
    <div className="Home-Container container min-width: 100%;">
      <div className="row justify-content-center width: 100%;" style={{ width: "100%" }}>
        <div className="col-md-8 text-center" style={{ margin: "1rem" }}>
          <h3>Animal List</h3>
          {/* Render the list of animals */}
          <Animals myAnimals={animals} ReloadData={ReloadData} />
        </div>
      </div>
    </div>
  );
};

export default View;
