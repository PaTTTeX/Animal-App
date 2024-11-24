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

