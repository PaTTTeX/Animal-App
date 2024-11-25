// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const port = 4000;

// create an express app
const app = express();

// get environment variables
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("MongoDB connection error:", err);
	});


// schema

const animalSchema = new mongoose.Schema({
	name: String,
	species: String,
	age: Number,
	habitat: String,
	imageUrl: String,
});

// model
const Animal = mongoose.model("Animal", animalSchema);

// routes
app.get("/api/animals", async (req, res) => {
	try {
		const animals = await Animal.find();
		res.json({ animals });
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch animals" });
	}
});

app.post("/api/animals", async (req, res) => {
	try {
		const { name, species, age, habitat, imageUrl } = req.body;
		const newAnimal = new Animal({ name, species, age, habitat, imageUrl });
		await newAnimal.save();
		res.status(201).json({
			message: "Animal added successfully",
			animal: newAnimal,
		});
	} catch (err) {
		res.status(500).json({ error: "Failed to add animal" });
	}
});


app.delete("/api/animals/:id", async (req, res) => {
	try {
		const { id } = req.params;
		await Animal.findByIdAndDelete(id);
		res.json({ message: "Animal deleted successfully" });
	} catch (err) {
		res.status(500).json({ error: "Failed to delete animal" });
	}
});

app.get('/api/animal/:id', async (req, res) => {
	try {
		const animal = await animalModel.findById(req.params.id);
		if (!animal) {
			return res.status(404).send("Animal not found");
		}
		res.send(animal);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server error");
	}
});


app.put('/api/animal/:id', async (req, res) => {
	try {
		const updatedAnimal = await animalModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true } // Return the updated animal
		);
		if (!updatedAnimal) {
			return res.status(404).send("Animal not found");
		}
		res.send(updatedAnimal);
	} catch (error) {
		console.error(error);
		res.status(500).send("Server error");
	}
});


// error handling
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

// start server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
