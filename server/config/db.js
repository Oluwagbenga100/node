const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        // console.error(`Error: ${error.message}`);
        console.log(error);
        process.exit(1);
        
    }
};

module.exports = connectDB;
