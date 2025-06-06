const mongoose= require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/sangam');
    console.log('MongoDB Connected ✅');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit on failure
  }
};

module.exports = {connectDB}