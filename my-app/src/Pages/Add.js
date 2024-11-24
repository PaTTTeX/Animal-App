import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const Add = () => {
    // State variables
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [habitat, setHabitat] = useState('');
    const [imageUrl, setImageUrl] = useState(''); // New state for image URL

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = { name, species, age, habitat, imageUrl }; // Include imageUrl
        console.log(animal);

        axios.post('http://localhost:4000/api/animals', animal)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <Container>
            <h3>Add New Animal</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Add Animal Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Add Animal Species:</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={species} 
                        onChange={(e) => setSpecies(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Add Animal Age:</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Add Animal Habitat:</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={habitat} 
                        onChange={(e) => setHabitat(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Add Animal Image URL:</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                        placeholder="Enter image URL" 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Animal
                </Button>
            </Form>
        </Container>
    );
};

export default Add;
