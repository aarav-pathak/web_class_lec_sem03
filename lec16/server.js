require('dotenv').config();
const server = require('./src/app');
const connectDB = require('./src/config/config');

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`Server is running at http://localhost:${PORT}`);
});
