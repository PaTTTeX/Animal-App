import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Pages.css';

export default function EditAnimal(props) {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [habitat, setHabitat] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/animal/' + id)
      .then((response) => {
        setName(response.data.name);
        setSpecies(response.data.species);
        setHabitat(response.data.habitat);
        setImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedAnimal = { id, name, species, habitat, imageUrl };
    axios.put('http://localhost:4000/api/animal/' + id, updatedAnimal)
      .then((res) => {
        console.log(res.data);
        navigate('/view'); // Redirect to the animals list
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ width: '100%' }}>
        <div className="col-md-8" style={{ margin: '1rem' }}>
          <h3 className="text-center">Edit Animal</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Animal Name: </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Species: </label>
              <input
                type="text"
                className="form-control"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Habitat: </label>
              <input
                type="text"
                className="form-control"
                value={habitat}
                onChange={(e) => setHabitat(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Image URL: </label>
              <input
                type="text"
                className="form-control"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Edit Animal" className="btn btn-primary btn-redirection"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}