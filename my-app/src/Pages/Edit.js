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

