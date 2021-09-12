'use strict';

const bookmodel = require('../modules/Book.modal');


const getboooks = (request, response) => {

  bookmodel.find((error, booksdata) => {
    response.json(booksdata)
  });

};


module.exports = {
  getboooks
}