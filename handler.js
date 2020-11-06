'use strict';

module.exports.register = async event => {
  const body = JSON.parse(event.body);
  const responseBody = {...body, id: Math.floor(Math.random() * 100) + 1};
  if("name" in body && "age" in body && "address" in body && "email" in body && "contactNo" in body){
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody, null, 2)
    };
  }
  return {
    statusCode: 500,
    body: JSON.stringify({message: "Invalid request body"}, null, 2)
  };
};

module.exports.getUserList = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      [{
        "name": "Test User One",
        "age": "25",
        "address": "No, Street, City",
        "email": "tu1@gmail.com",
        "contactNo": "0711234567"
      },
      {
        "name": "Test User Two",
        "age": "26",
        "address": "No, Street, City",
        "email": "tu2@gmail.com",
        "contactNo": "0751242134"
      },
      {
        "name": "Test User Three",
        "age": "24",
        "address": "No, Street, City",
        "email": "tu3@gmail.com",
        "contactNo": "0763414683"
      }],
      null,
      2
    ),
  };
};
