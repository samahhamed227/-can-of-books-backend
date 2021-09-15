'use strict';

const bookmodel = require('../modules/Book.modal');


const getboooks = (request, response) => {

  bookmodel.find({email: request.query.email},(error, booksdata) => {
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

  //update 
  const updatebook= (request, response) => {
    /**
     * HTTP PUT methods uses the request body to send/ recieve the data that it needs to update
     * We can use the PARAMS with the PUT HTTP method to receive the ID of the item/ book that we want to update
     */
  
     const { title, description, status,email } = request.body;
     const bookId2 = request.params.books_Id;
  
     bookmodel.findByIdAndUpdate({_id: bookId2 }, { title, description, status,email }, { new: true }, (error, updatebooksdata) => {
  
      response.json(updatebooksdata);
    });
  }

  
module.exports = {
  getboooks,
  createbook,
  deletebook,
  updatebook
}
