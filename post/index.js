// this will be our lambda handle file

const uuid = require('uuid').v4;
const peopleModel = require('./people.schema.js');


exports.handler = async (event) => {
  try {
    // event.body={ name:'mohammd',age: 23, occupation: 'student'}

    //1. destructre the event.body and parse it
    const { name, age, occupation } = JSON.parse(event.body);
    const id = uuid();
    const doc = new peopleModel({ id, name, age, occupation });

    const data = await doc.save();
    return {
      statusCode: 201, // for creation
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};


