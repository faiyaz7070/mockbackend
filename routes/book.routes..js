const express = require("express");
const router = express.Router();

const { BookModel } = require("../models/book.model");

// Create a new book
router.post("/book", async (req, res) => {
  const { Title, Author, Genre, Description, Price } = req.body;
  try {
    const book = new BookModel({Title, Author, Genre, Description, Price });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create book" });
  }
});

// Get all books
router.get("/book", async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve books" });
  }
});

// Get books sorted by price in ascending order
router.get("/book/asc", async (req, res) => {
  try {
    const books = await BookModel.find().sort({ Price: 1 });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve sorted books" });
  }
});

// Get books sorted by price in descending order
router.get("/book/desc", async (req, res) => {
  try {
    const books = await BookModel.find().sort({ Price: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve sorted books" });
  }
});

// Get books filtered by author
router.get("/book/genre/:genre", async (req, res) => {
  const { genre } = req.params;
  try {
    const books = await BookModel.find({ Genre: genre });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve filtered books" });
  }
});

// Delete a book by ID
router.delete("/book/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BookModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete book" });
  }
});

module.exports ={router};
