// Import necessary libraries(Required to run the server)
const express = require("express");    // Express framework for building the API
const mongoose = require("mongoose");  // MongoDB library for database interaction
const cors = require("cors");          // Middleware for enabling Cross-Origin requests
const dotenv = require("dotenv");      // For loading environment variables

const port = 4000;  // Port where the server will run

// Create an Express app
const app = express();

// Load environment variables (like database connection string)
dotenv.config();

// Middleware to handle JSON data and allow CORS (Cross-Origin Resource Sharing)
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());  // Enable CORS for all routes

// Enable specific CORS headers for more control
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();  // Continue to the next middleware/route
});

// Connect to MongoDB database
mongoose.connect(process.env.DB_CONNECTION_STRING)  // Use the connection string from environment variables
    .then(() => console.log("Connected to MongoDB"))  // Log success message
    .catch((err) => console.error("MongoDB connection error:", err));  // Log error if connection fails

// Define the Animal schema (structure for animal data in MongoDB)
const animalSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    habitat: String,
    imageUrl: String,
});

// Create a model based on the schema
const Animal = mongoose.model("Animal", animalSchema);

// Route to fetch all animals
app.get("/api/animals", async (req, res) => {
    try {
        const animals = await Animal.find();  // Get all animals from the database
        res.json({ animals });  // Return animals as JSON
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch animals" });  // Handle any errors
    }
});

// Route to add a new animal
app.post("/api/animals", async (req, res) => {
    try {
        const { name, species, age, habitat, imageUrl } = req.body;  // Get data from request body
        const newAnimal = new Animal({ name, species, age, habitat, imageUrl });  // Create new animal document
        await newAnimal.save();  // Save the new animal to the database
        res.status(201).json({ message: "Animal added successfully", animal: newAnimal });  // Send success response
    } catch (err) {
        res.status(500).json({ error: "Failed to add animal" });  // Handle errors
    }
});

// Route to delete an animal by ID
app.delete("/api/animals/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Get animal ID from route params
        await Animal.findByIdAndDelete(id);  // Delete animal from database by ID
        res.json({ message: "Animal deleted successfully" });  // Send success response
    } catch (err) {
        res.status(500).json({ error: "Failed to delete animal" });  // Handle errors
    }
});

// Route to get a specific animal by ID
app.get('/api/animal/:id', async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);  // Find animal by ID
        if (!animal) {
            return res.status(404).send("Animal not found");  // If not found, send 404 error
        }
        res.send(animal);  // Send the found animal data
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");  // Handle errors
    }
});

// Route to update an animal by ID
app.put('/api/animal/:id', async (req, res) => {
    try {
        const updatedAnimal = await Animal.findByIdAndUpdate(
            req.params.id,  // Animal ID from URL params
            req.body,       // Data to update from request body
            { new: true }    // Return updated animal
        );
        if (!updatedAnimal) {
            return res.status(404).send("Animal not found");  // If not found, send 404 error
        }
        res.send(updatedAnimal);  // Send updated animal data
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");  // Handle errors
    }
});

// Error handling middleware (for catching all other errors)
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log the error stack
    res.status(500).send("Something went wrong!");  // Send generic error response
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
