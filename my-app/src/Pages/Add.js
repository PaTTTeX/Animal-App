import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import '../App.css';

const Add = () => {
    // State variables
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [habitat, setHabitat] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = { name, species, age, habitat, imageUrl }; 
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
            <h3 className="col-md-8 text-center" style={{margin: '1rem', width: '100%'}}>Add New Animal</h3>
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
                    <Form.Label>Add Animal Life Span:</Form.Label>
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
