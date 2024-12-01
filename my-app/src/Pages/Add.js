import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

const Add = () => {
    // State variables to store input values
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [habitat, setHabitat] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const animal = { name, species, age, habitat, imageUrl }; // Create animal object from form data
        console.log(animal);

        // Send POST request to add new animal
        axios.post('http://localhost:4000/api/animals', animal)
            .then((res) => {
                console.log(res.data); // Log the response data
                navigate('/view'); // Redirect to the view page
            })
            .catch((err) => {
                console.error(err); // Log any errors
            });
    };

    return (
        <Container>
            <div className="row justify-content-center" style={{ width: '100%' }}>
                <div className="col-md-8" style={{ margin: '1rem' }}>
                    <h3 className="text-center" style={{ marginBottom: '1rem' }}>Add New Animal</h3>
                    <Form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '15px' }}>
                        
                        {/* Animal Name Field */}
                        <Form.Group>
                            <Form.Label>Add Animal Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Update name state
                            />
                        </Form.Group>

                        {/* Animal Species Field */}
                        <Form.Group>
                            <Form.Label>Add Animal Species:</Form.Label>
                            <Form.Control
                                type="text"
                                value={species}
                                onChange={(e) => setSpecies(e.target.value)} // Update species state
                            />
                        </Form.Group>

                        {/* Animal Age Field */}
                        <Form.Group>
                            <Form.Label>Add Animal Life Span:</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)} // Update age state
                            />
                        </Form.Group>

                        {/* Animal Habitat Field */}
                        <Form.Group>
                            <Form.Label>Add Animal Habitat:</Form.Label>
                            <Form.Control
                                type="text"
                                value={habitat}
                                onChange={(e) => setHabitat(e.target.value)} // Update habitat state
                            />
                        </Form.Group>

                        {/* Animal Image URL Field */}
                        <Form.Group>
                            <Form.Label>Add Animal Image URL:</Form.Label>
                            <Form.Control
                                type="text"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)} // Update imageUrl state
                                placeholder="Enter image URL"
                            />
                        </Form.Group>

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center align-items-center">
                            <Button className="btn-redirection" variant="primary" type="submit">
                                Add Animal
                            </Button>
                        </div>

                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Add;
