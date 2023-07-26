const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://keshav1234singhal:heysiri@cluster0.xogj4k4.mongodb.net/test");

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;