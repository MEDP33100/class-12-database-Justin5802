const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a schema
const studentSchema = new mongoose.Schema({
  name: String,
  grade: String,
  graduationYear: Number,
  major: String
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Query all students from the database
    const students = await Student.find({});
    res.render('index', { 
      title: 'Student Database',
      students: students 
    });
  } catch (err) {
    console.error('Error fetching students:', err);
    next(err);
  }
});

module.exports = router;