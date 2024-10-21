const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/contact'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables

const router = express.Router();

// Set up nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service if different
  auth: {
    user: process.env.EMAIL_USER, // Your email address from .env
    pass: process.env.EMAIL_PASS, // Your email password from .env
  },
});

// POST route for submitting contact form
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact entry and save it to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Prepare the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change to the recipient's email address
      subject: `Message from ${name}`,
      text: `You have received a new message from ${name} (${email}): ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error:', error);  // Log the error for debugging
    res.status(500).json({
      message: 'Failed to submit contact form or send email.',
      error: error.message,
    });
  }
});

module.exports = router;
