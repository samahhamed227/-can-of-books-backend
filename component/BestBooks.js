'use strict';


const bookmodel = require('../modules/Book.modal');

const bestbook = () => {

  const firstbook = new bookmodel({
    title: " The Naked Ape  ",
    description: "In this bestseller, Morris, a zoologist and ethologist, explores the human species by comparing them with other animals.",
    status: "avaliable",
    email: "smsmhamed723@gmail.com"

  });

  firstbook.save();

  const secondbook = new bookmodel({
    title: "The Prince",
    description: "The Prince provided aspiring rulers with a guide on getting power and holding on to it. ",
    status: "avaliable",
    email: "smsmhamed723@gmail.com"
  });

  secondbook.save();

  const thirdbook = new bookmodel({
    title: "The Female Eunuch",
    description: "it still gets people thinking about and debating important issues",
    status: "avaliable",
    email: "smsmhamed723@gmail.com"
  });

  thirdbook.save();

  console.log("Data seeded! 👍");
}

module.exports = bestbook;



