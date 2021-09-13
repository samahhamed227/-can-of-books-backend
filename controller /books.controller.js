'use strict';

const bookmodel = require('../modules/Book.modal');


const getboooks = (request, response) => {

  bookmodel.find((error, booksdata) => {
    response.json(booksdata)
  });

};

const createbook = (request, response) => {
  const { title, description, status,email } = request.body;


  const newbook = new bookmodel({
    title, description, status,email
  });

  newbook.save();

  response.json(newbook);

}

//delet

const deletebook= (request, response) => {
  console.log(request.params);
  const bookId2 = request.params.books_Id;

  bookmodel.deleteOne({_id: bookId2 }, (error, deletedData) => {

    response.json(deletedData);
  });
 

}
  
module.exports = {
  getboooks,
  createbook,
  deletebook
}
