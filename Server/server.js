// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose
const contactRoute = require('./routes/contact');
const emailRoute = require('./routes/emailRoute')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const _dirname = path.resolve();


// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Define routes
app.use('/api/contact', contactRoute);
app.use('/api', emailRoute)


app.use(express.static(path.join(_dirname, "/Client/dist")))
app.get('*', (_, res ) => {
  res.sendFile(path.resolve(_dirname, "Client", "dist", "index.html"));
})


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging
  res.status(500).send('Something went wrong!'); // Respond with a generic error message
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
