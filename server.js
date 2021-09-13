'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const mongoose =require('mongoose');
const MONGO_URL = process.env.MONGO_URL;
// const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URL);

app.get('/test', (request, response) => {

  response.send('test request received')

})
const getIndex = require('./controller /index.controller');


const bestbook = require('./component/BestBooks');
// bestbook();

const { getboooks ,createbook, deletebook} = require('./controller /books.controller');


app.get('/', getIndex);
app.get('/books', getboooks);
app.post('/books', createbook); 
app.delete('/books/:books_Id', deletebook); 



app.listen(PORT, () => console.log(`listening on ${PORT}`));
