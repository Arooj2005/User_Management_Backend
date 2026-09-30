const mongoose = require("mongoose");
 
require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8"]);

require("dotenv").config();

const connectDB = async() => {
  try {
    console.log("MONGO URI exists:", !!process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
     console.log("MongoDB connected successfully");
  } catch(err) {
    console.log("Mongo DB Connection Failed!", err.message);
  }
};

module.exports = connectDB;