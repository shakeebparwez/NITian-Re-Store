const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();
const dbConfig = require('./config/dbConfig');

app.use(express.json());

const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');

const cors = require('cors');
app.use(cors());

app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);

app.listen(port, () => console.log(`Node/Express Server Started on Port ${port}`));