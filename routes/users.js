const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Use the connection string from the .env file
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas!");
}).catch((error) => {
    console.error("Connection error", error);
});

// Define the user schema
var userschema = mongoose.Schema({
   username: String,
   name: String,
   email: String,
});

module.exports = mongoose.model('user', userschema);
