const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./config/dbConnection'); 
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
connectDb();

// Routes
app.use('/api/auth', userRoutes);

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
