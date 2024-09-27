const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const connectDb = require('./config/dbConnection'); 
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: '5mb' })); // Increased JSON payload size limit
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' })); // Increased body-parser JSON size limit
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true })); // Increase URL-encoded request size limit

// Connect to MongoDB
connectDb();

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/reviews', reviewRoutes)
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
