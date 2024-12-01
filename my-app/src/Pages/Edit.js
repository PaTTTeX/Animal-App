import React from 'react';
import { useParams } from 'react-router-dom'; // Hook to access route params (animal id)
import { useState, useEffect } from 'react'; // State and effect hooks
import axios from 'axios'; // Library for making HTTP requests
import { useNavigate } from "react-router-dom"; // Hook to navigate programmatically
import './Pages.css'; // Custom styling

export default function EditAnimal(props) {
  let { id } = useParams(); // Get the animal id from the URL
  const [name, setName] = useState(""); // State to store the animal's name
  const [species, setSpecies] = useState(""); // State to store the animal's species
  const [habitat, setHabitat] = useState(""); // State to store the animal's habitat
  const [imageUrl, setImageUrl] = useState(""); // State to store the animal's image URL
  const navigate = useNavigate(); // Hook to redirect to another page

  // Fetch the animal's details when the component mounts or the ID changes
  useEffect(() => {
    axios.get('http://localhost:4000/api/animal/' + id)
      .then((response) => {
        // Set the state with the fetched animal data
        setName(response.data.name);
        setSpecies(response.data.species);
        setHabitat(response.data.habitat);
        setImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  }, [id]); // Dependency array: fetch data again when the ID changes

  // Handle form submission to update the animal's data
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const updatedAnimal = { id, name, species, habitat, imageUrl }; // Prepare the updated data
    axios.put('http://localhost:4000/api/animal/' + id, updatedAnimal)
      .then((res) => {
        console.log(res.data); // Log the response data
        navigate('/view'); // Redirect to the animals list after successful update
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ width: '100%' }}>
        <div className="col-md-8" style={{ margin: '1rem' }}>
          <h3 className="text-center">Edit Animal</h3>
          <form onSubmit={handleSubmit}> {/* Form to edit animal details */}
            <div className="form-group">
              <label>Animal Name: </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
              />
            </div>
            <div className="form-group">
              <label>Species: </label>
              <input
                type="text"
                className="form-control"
                value={species}
                onChange={(e) => setSpecies(e.target.value)} // Update species state
              />
            </div>
            <div className="form-group">
              <label>Habitat: </label>
              <input
                type="text"
                className="form-control"
                value={habitat}
                onChange={(e) => setHabitat(e.target.value)} // Update habitat state
              />
            </div>
            <div className="form-group">
              <label>Image URL: </label>
              <input
                type="text"
                className="form-control"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} // Update image URL state
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Edit Animal" className="btn btn-primary btn-redirection"/> {/* Submit button */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
