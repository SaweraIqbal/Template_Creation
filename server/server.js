const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./config/dbConnection'); 
const cors = require('cors');
app.use(cors());

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.use('/api/auth', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
