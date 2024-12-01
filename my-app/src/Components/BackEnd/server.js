// Import necessary libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const port = 4000;  // Server port

// Create Express app
const app = express();

// Load environment variables
dotenv.config();

// Middleware for JSON parsing and enabling CORS
app.use(express.json());
app.use(cors());

// Enable specific CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define Animal schema
const animalSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    habitat: String,
    imageUrl: String,
});

// Create Animal model
const Animal = mongoose.model("Animal", animalSchema);

// Fetch all animals
app.get("/api/animals", async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json({ animals });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch animals" });
    }
});

// Add a new animal
app.post("/api/animals", async (req, res) => {
    try {
        const { name, species, age, habitat, imageUrl } = req.body;
        const newAnimal = new Animal({ name, species, age, habitat, imageUrl });
        await newAnimal.save();
        res.status(201).json({ message: "Animal added successfully", animal: newAnimal });
    } catch (err) {
        res.status(500).json({ error: "Failed to add animal" });
    }
});

// Delete an animal by ID
app.delete("/api/animals/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Animal.findByIdAndDelete(id);
        res.json({ message: "Animal deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete animal" });
    }
});

// Get a specific animal by ID
app.get('/api/animal/:id', async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) return res.status(404).send("Animal not found");
        res.send(animal);
    } catch (error) {
        res.status(500).send("Server error");
    }
});

// Update an animal by ID
app.put('/api/animal/:id', async (req, res) => {
    try {
        const updatedAnimal = await Animal.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        if (!updatedAnimal) return res.status(404).send("Animal not found");
        res.send(updatedAnimal);
    } catch (error) {
        res.status(500).send("Server error");
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
