require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.log(`Unable to connect to database`);
        process.exit(1);
    }    
}